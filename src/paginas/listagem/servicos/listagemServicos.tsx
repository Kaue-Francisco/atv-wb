import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { servicos } from '../../../data';
import './style.css';

export class Servicos extends Component {
    render() {
        return (
            <section>
                <main>
                    <h1>Serviços</h1>
                    <div className="servicos-container">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {servicos.map(servico => (
                                <Col key={servico.id}>
                                    <Card className="servico-card">
                                        <Card.Body>
                                            <Card.Title className="card-title">{servico.nome}</Card.Title>
                                            <Card.Text className="card-text">
                                                Preço: {servico.preco}
                                            </Card.Text>
                                            <div className='buttons'>
                                                <Button variant="info" href={`/servicos/1`}>Visualizar</Button>{' '}
                                                <Button variant="success" href={`/editar_servico/1`}>Editar</Button>{' '}
                                                <Button variant="danger">Remover</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </main>
            </section>
        );
    }
}
