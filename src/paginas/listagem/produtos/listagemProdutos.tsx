import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { produtos } from '../../../data';
import './style.css';

const Produtos = () => {
    return (
        <section>
            <main>
                <h1>Produtos</h1>
                <div className="produtos-container">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {produtos.map(produto => (
                            <Col key={produto.id}>
                                <Card className="produto-card">
                                    <Card.Body>
                                        <Card.Title className="card-title">{produto.nome}</Card.Title>
                                        <Card.Text className="card-text">
                                            Preço: {produto.preco}
                                        </Card.Text>
                                        <div className='buttons'>
                                            <Button variant="info" href={`/produtos/1`}>Visualizar</Button>{' '}
                                            <Button variant="success" href={`/editar_produto/1`}>Editar</Button>{' '}
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

export default Produtos;
