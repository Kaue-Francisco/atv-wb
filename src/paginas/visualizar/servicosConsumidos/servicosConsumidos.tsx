import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { servicos } from '../../../data';

export class ServicosConsumidos extends React.Component {
    render() {

        return (
            <section className="d-flex flex-column">
                <main className="flex-grow-1">
                    <h1>Serviços Consumidos</h1>
                    <Container>
                        <Row>
                            {servicos.map((servico, index) => (
                                <Col key={index} md={4} className="mb-2">
                                    <Card bg="light" text="dark">
                                        <Card.Body>
                                            <Card.Title>{servico.nome}</Card.Title>
                                            <Card.Text>Preço: {servico.preco}</Card.Text>
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
}