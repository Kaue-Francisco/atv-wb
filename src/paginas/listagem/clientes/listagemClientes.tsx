import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { clientes } from '../../../data';
import './styles.css';

const Clientes = () => {
    return (
        <section>
            <main>
                <h1>Clientes</h1>
                <div className="clientes-container">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {clientes.map(cliente => (
                            <Col key={cliente.id}>
                                <Card className="cliente-card">
                                    <Card.Body>
                                        <Card.Title className="card-title">{cliente.nome}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-subtitle">{cliente.nomeSocial}</Card.Subtitle>
                                        <Card.Text className="card-text">
                                            Gênero: {cliente.genero}
                                        </Card.Text>
                                        <div className='buttons'>
                                            <Button variant="info" href={`/clientes/1`}>Visualizar</Button>{' '}
                                            <Button variant="success" href={`/editar_cliente/1`}>Editar</Button>{' '}
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
};

export default Clientes;
