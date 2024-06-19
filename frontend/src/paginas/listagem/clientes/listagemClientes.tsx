import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { api } from '../../../utils/api';
import './styles.css';

interface Cliente {
    id: number;
    nome: string;
    nomeSocial: string;
    genero: string;
}

const Clientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    // Função para buscar todos os clientes
    const fetchTodosClientes = async () => {
        try {
            const response = await api.get('/listar');
            setClientes(response.data); // Armazenar os clientes no estado
        } catch (error) {
            console.error(error);
        }
    };

    // Função para remover um cliente
    const handleRemoverCliente = async (id: number) => {
        try {
            await api.delete(`/remover/cliente/${id}`);
            setClientes((prevClientes) => prevClientes.filter(cliente => cliente.id !== id)); // Remover o cliente do estado
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect para buscar os clientes quando o componente for montado
    useEffect(() => {
        fetchTodosClientes();
    }, []);

    return (
        <section>
            <main>
                <Container>
                    <h1>Clientes</h1>
                    <div className="clientes-container">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {clientes.map((cliente: Cliente) => (
                                <Col key={cliente.id}>
                                    <Card className="cliente-card">
                                        <Card.Body>
                                            <Card.Title className="card-title">{cliente.nome}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted card-subtitle">{cliente.nomeSocial}</Card.Subtitle>
                                            <Card.Text className="card-text">
                                                Gênero: {cliente.genero}
                                            </Card.Text>
                                            <div className='buttons'>
                                                <Button variant="info" href={`/clientes/${cliente.id}`}>
                                                    Visualizar
                                                </Button>{' '}
                                                <Button variant="success" href={`/editar_cliente/${cliente.id}`}>
                                                    Editar
                                                </Button>{' '}
                                                <Button variant="danger" onClick={() => handleRemoverCliente(cliente.id)}>
                                                     Remover
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </main>
        </section>
    );
};

export default Clientes;
