import { Component } from 'react';
import { clientes } from '../../../data';
import { Container, Table, Card } from 'react-bootstrap';

export class ConsumosClientes extends Component{
    render(){
        return(
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
        )
    }
}