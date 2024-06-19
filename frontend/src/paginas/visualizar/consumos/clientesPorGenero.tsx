import React, { useState, useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';

interface Cliente {
    id: number;
    nome: string;
    genero: string;
}

interface ClientesPorGenero {
    masculino: Cliente[];
    feminino: Cliente[];
}

const ClientesPorGenero = () => {
    const [clientesPorGenero, setClientesPorGenero] = useState<ClientesPorGenero>({ masculino: [], feminino: [] });

    const fetchConsumosClientes = async () => {
        try {
            const response = await api.get('/listar/clientesPorGenero');
            setClientesPorGenero(response.data);
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
                        <Card.Text>Listagem de clientes separados por gênero.</Card.Text>
                    </Card.Body>
                </Card>
                <h2>Clientes Masculinos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientesPorGenero.masculino.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.genero}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h2>Clientes Femininos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientesPorGenero.feminino.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.genero}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ClientesPorGenero;
