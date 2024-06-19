import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export class VisualizarCliente extends Component {
    render(){
        return (
            <section>
                <main>
                    <h1>Visualizar cliente: Ana Oliveira</h1>
                    <div className="d-flex justify-content-between mb-3">
                        <Button variant="primary" href='/produtos-consumidos' className="me-2">Produtos Consumidos</Button>
                        <Button variant="warning" href='/servicos-consumidos' className="me-2">Serviços Consumidos</Button>
                        <Button variant="success" href='/consumir-produto' className="me-2">Consumir Produto</Button>
                        <Button variant="info" href='/consumir-servico'>Consumir Serviço</Button>
                    </div>
                    <Card
                        bg="white"
                        text="dark"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>ID: 7</Card.Header>
                        <Card.Body>
                            <Card.Title>Ana Oliveira</Card.Title>
                            <Card.Text>
                                Nome Social: Aninha
                            </Card.Text>
                            <Card.Text>
                                Gênero: Feminino
                            </Card.Text>
                            <Card.Text>
                                CPF: 123.456.789-00
                            </Card.Text>
                            <Card.Text>
                                Data Emissao CPF: 10/10/2000
                            </Card.Text>
                            <Card.Text>
                                RG: 12.345.678-9
                            </Card.Text>
                            <Card.Text>
                                Data Emissao RG: 10/10/2000
                            </Card.Text>
                            <Card.Text>
                                Telefone: 99 87654-3210
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button style={{marginBottom: '50px'}} variant="dark" href='/clientes'>Voltar</Button>
                </main>
            </section>
        )
    }
}
