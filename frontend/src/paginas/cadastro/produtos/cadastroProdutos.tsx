import React from 'react';
import { Button } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { redirect, useNavigate } from 'react-router-dom';

const CadastrarProdutos = () => {
    const [produtoNome, setProdutoNome] = React.useState('');
    const [produtoPreco, setProdutoPreco] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setProdutoPreco(produtoPreco.replace(',', '.'));
            await api.post('/cadastro/produto', {
                nome: produtoNome,
                preco: Number(produtoPreco)
            });
            // Resetar os valores dos inputs após o cadastro
            setProdutoNome('');
            setProdutoPreco('');
            navigate('/')
        } catch (error) {
            let messageError: any = error
            alert(messageError.response.data.error || 'Erro ao cadastrar produto');
        }
    };

    return (
        <section>
            <main>
                <h1>Cadastrar Produto</h1>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input
                                type="text"
                                value={produtoNome}
                                onChange={(e) => setProdutoNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input
                                type="number"
                                value={produtoPreco}
                                onChange={(e) => setProdutoPreco(e.target.value)}
                                required
                            />
                        </div>
                        <div className="button-group" style={{ marginTop: '10px' }}>
                            <Button variant="dark" href='/'>Voltar</Button>
                            <Button variant="success" type='submit' style={{ marginLeft: '5px' }}>Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default CadastrarProdutos;
