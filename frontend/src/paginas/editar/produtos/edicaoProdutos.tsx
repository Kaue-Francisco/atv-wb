import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ProdutoInterface } from '../../interface/produtoInterface';
import { api } from '../../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditarProduto = () => {
    const [produto, setProduto] = React.useState<ProdutoInterface | undefined>(undefined);
    const [nome, setNome] = React.useState<string>('');
    const [preco, setPreco] = React.useState<number>(0);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarProduto = async () => {
            try {
                const response = await api.get(`/buscar/produto/${id}`);
                const data = await response.data;
                setProduto(data);
                setNome(data.nome);
                setPreco(data.preco);
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
            }
        };

        buscarProduto();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.put(`/editar/produto/${id}`, {
                nome,
                preco
            });
            alert('Produto editado com sucesso!');
            navigate('/produtos');
        } catch (error) {
            console.error('Erro ao editar produto:', error);
        }
    };

    return (
        <section>
            <main>
                <h1>Editar Produto</h1>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="number" onChange={e => setPreco(Number(e.target.value))} value={preco} />
                        </div>
                        <div className='submit'>
                            <Button style={{ marginRight: "10px" }} variant="dark" href='/produtos'>Voltar</Button>
                            <Button variant="success" type='submit'>Editar</Button>{' '}
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default EditarProduto;
