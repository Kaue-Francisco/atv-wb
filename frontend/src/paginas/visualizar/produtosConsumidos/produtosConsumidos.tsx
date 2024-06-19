import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const ProdutosConsumidos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarProdutosConsumidos = async () => {
            try {
                const response = await api.get(`/produtos/consumidos/${id}`);
                const data = await response.data;
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos consumidos:', error);
            }
        };

        buscarProdutosConsumidos();
    }, [id]);

    if (produtos.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <section className="d-flex flex-column">
            <main className="flex-grow-1">
                <h1>Produtos Consumidos</h1>
                <Container>
                    <Row>
                        {produtos.map((produto) => (
                            <Col key={produto.id} md={4} className="mb-2">
                                <Card bg="light" text="dark">
                                    <Card.Body>
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Text>Preço: R${produto.preco.toFixed(2)}</Card.Text>
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

export default ProdutosConsumidos;
