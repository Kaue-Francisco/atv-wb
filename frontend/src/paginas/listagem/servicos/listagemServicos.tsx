import { Button, Card, Col, Row } from 'react-bootstrap';
import { api } from '../../../utils/api';
import './style.css';
import React, { useState } from 'react';

interface Servico {
    id: number;
    nome: string;
    preco: number;
}

const Servicos = () => {
    const [servicos, setServicos] = useState<Servico[]>([]);
    // Função para buscar todos os serviços
    const fetchTodosServicos = async () => {
        try {
            const response = await api.get('/listar/servico');
            setServicos(response.data); // Armazenar os produtos no estado
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoverServico = async (id: number) => {
        try {
            await api.delete(`/remover/servico/${id}`);
            setServicos((prevServicos) => prevServicos.filter(servico => servico.id !== id)); // Remover o produto do estado
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        fetchTodosServicos();
    }, []);

    return (
        <section>
            <main>
                <h1>Serviços</h1>
                <div className="servicos-container">
                    {servicos.map((servico: Servico) => (
                        <Card key={servico.id} className="servico-card">
                            <Card.Body>
                                <Card.Title className="card-title">{servico.nome}</Card.Title>
                                <Card.Text className="card-text">
                                    Preço: {servico.preco}
                                </Card.Text>
                                <div className='buttons'>
                                    <Button variant="info" href={`/servicos/${servico.id}`}>Visualizar</Button>{' '}
                                    <Button variant="success" href={`/editar_servico/${servico.id}`}>Editar</Button>{' '}
                                    <Button variant="danger" onClick={() => handleRemoverServico(servico.id)}>Remover</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Servicos;
