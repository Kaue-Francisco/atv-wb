import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { produtos } from '../../../data';

const ProdutosConsumidos = () => {
    return (
        <section className="d-flex flex-column">
            <main className="flex-grow-1">
                <h1>Produtos Consumidos</h1>
                <Container>
                    <Row>
                        {produtos.map((produto: any, id: any) => (
                            <Col key={id} md={4} className="mb-2">
                                <Card bg="light" text="dark">
                                    <Card.Body>
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Text>Preço: {produto.preco}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
            <Container className="d-flex justify-content-center mt-auto mb-3">
                <Button variant="dark" href='/clientes/1'>Voltar</Button>
            </Container>
        </section>
    );
}

export default ProdutosConsumidos;
