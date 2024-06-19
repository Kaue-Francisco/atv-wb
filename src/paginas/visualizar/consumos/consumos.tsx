import React from 'react';
import { clientes } from '../../../data';
import { Container, Table, Card } from 'react-bootstrap';

const ConsumosClientes = () => {
    return (
        <section>
            <Container>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title><h1>Consumos</h1></Card.Title>
                        <Card.Text>Listagem 10 clientes que mais consumiram em quantidade.</Card.Text>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, index) => (
                            <tr key={index}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.consumo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ConsumosClientes;