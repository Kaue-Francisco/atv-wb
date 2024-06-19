import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export class VisualizarServico extends Component {
    render(){
        return(
            <section>
                <main>
                    <h1>Visualizar Serviço: "Corte de Cabelo"</h1>
                    <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                        <Card.Header>ID: 1</Card.Header>
                        <Card.Body>
                            <Card.Title>Corte de Cabelo</Card.Title>
                            <Card.Text>
                                Preço: R$50
                            </Card.Text>
                        </Card.Body>
                    </Card>
                <Button variant="dark" href='/servicos'>Voltar</Button>
                </main>
            </section>
        )
    }
};
