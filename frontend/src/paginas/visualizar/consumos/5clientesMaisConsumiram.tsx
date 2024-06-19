import React, { useState, useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';

interface Cliente {
    id: number;
    nome: string;
    totalGasto: number;
}

const CincoClientesPorValor = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const fetchConsumosClientes = async () => {
        try {
            const response = await api.get('/listar/top5ClientesPorValor');
            setClientes(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchConsumosClientes();
    }, []);

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
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, index) => (
                            <tr key={index}>
                                <td>{cliente.nome}</td>
                                <td>R${cliente.totalGasto}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default CincoClientesPorValor;
