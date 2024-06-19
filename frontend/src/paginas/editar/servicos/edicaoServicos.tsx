import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { api } from '../../../utils/api';  // ajuste este caminho conforme necessário
import { useParams, useNavigate } from 'react-router-dom';

const EditarServico = () => {
    const [servico, setServico] = React.useState<{ nome: string; preco: number } | undefined>(undefined);
    const [nome, setNome] = React.useState<string>('');
    const [preco, setPreco] = React.useState<number>(0);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarServico = async () => {
            try {
                const response = await api.get(`/buscar/servico/${id}`);
                const data = await response.data;
                setServico(data);
                setNome(data.nome);
                setPreco(data.preco);
            } catch (error) {
                console.error('Erro ao buscar serviço:', error);
            }
        };

        buscarServico();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.put(`/editar/servico/${id}`, {
                nome,
                preco
            });
            alert('Serviço editado com sucesso!');
            navigate('/servicos');
        } catch (error) {
            console.error('Erro ao editar serviço:', error);
        }
    };

    return (
        <section>
            <main>
                <h1>Editar Serviço</h1>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="number" onChange={e => setPreco(Number(e.target.value))} value={preco} />
                        </div>
                        <div className='submit'>
                            <Button style={{ marginRight: "10px" }} variant="dark" href='/servicos'>Voltar</Button>
                            <Button variant="success" type='submit'>Editar</Button>{' '}
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default EditarServico;
