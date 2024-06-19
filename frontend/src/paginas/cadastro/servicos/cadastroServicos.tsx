import React from 'react';
import { Button } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';

const CadastrarServico = () => {
    const [nome, setNome] = React.useState('');
    const [preco, setPreco] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setPreco(preco.replace(',', '.'));
            await api.post('/cadastro/servico', {
                nome: nome,
                preco: Number(preco)
            });
            setNome('');
            setPreco('');
            alert('Serviço cadastrado com sucesso!');
            navigate('/');
        } catch (error) {
            let messageError: any = error
            alert(messageError.response.data.error || 'Erro ao cadastrar serviço');
        }
    }

    return (
        <section>
            <main>
                <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" onChange={e => setNome(e.target.value)} required/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" onChange={e => setPreco(e.target.value)} required/>
                        </div>
                        <div className="button-group" style={{ marginTop: '10px' }}>
                            <Button variant="dark" href="/">Voltar</Button>
                            <Button variant="success" type="submit" style={{ marginLeft: '5px' }}>Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarServico;