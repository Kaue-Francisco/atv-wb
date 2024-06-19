import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Servico {
    id: number;
    nome: string;
    preco: number;
}

const ServicosConsumidos = () => {
    const [servicos, setServicos] = useState<Servico[]>([]);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarServicosConsumidos = async () => {
            try {
                const response = await api.get(`/servicos/consumidos/${id}`);
                const data = await response.data;
                setServicos(data);
            } catch (error) {
                console.error('Erro ao buscar serviços consumidos:', error);
            }
        };

        buscarServicosConsumidos();
    }, [id]);

    if (servicos.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <section className="d-flex flex-column">
            <main className="flex-grow-1">
                <h1>Serviços Consumidos</h1>
                <Container>
                    <Row>
                        {servicos.map((servico) => (
                            <Col key={servico.id} md={4} className="mb-2">
                                <Card bg="light" text="dark">
                                    <Card.Body>
                                        <Card.Title>{servico.nome}</Card.Title>
                                        <Card.Text>Preço: R${servico.preco.toFixed(2)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
            <Container className="d-flex justify-content-center mt-auto mb-3">
                <Button variant="dark" onClick={() => navigate(`/clientes/${id}`)}>Voltar</Button>
            </Container>
        </section>
    );
}

export default ServicosConsumidos;
