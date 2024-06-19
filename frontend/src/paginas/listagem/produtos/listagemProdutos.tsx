import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import { api } from '../../../utils/api';
import './style.css';

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const Produtos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    // Função para buscar todos os produtos
    const fetchTodosProdutos = async () => {
        try {
            const response = await api.get('/listar/produto');
            setProdutos(response.data); // Armazenar os produtos no estado
        } catch (error) {
            console.error(error);
        }
    };

    // Função para remover um produto
    const handleRemoverProduto = async (id: number) => {
        try {
            await api.delete(`/remover/produto/${id}`);
            setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id)); // Remover o produto do estado
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect para buscar os produtos quando o componente for montado
    useEffect(() => {
        fetchTodosProdutos();
    }, []);

    return (
        <section>
            <main>
                <Container>
                    <h1>Produtos</h1>
                    <div className="produtos-container">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {produtos.map((produto: Produto) => (
                                <Col key={produto.id}>
                                    <Card className="produto-card">
                                        <Card.Body>
                                            <Card.Title className="card-title">{produto.nome}</Card.Title>
                                            <Card.Text className="card-text">
                                                Preço: {produto.preco}
                                            </Card.Text>
                                            <div className='buttons'>
                                                <Button variant="info" href={`/produtos/${produto.id}`}>Visualizar</Button>{' '}
                                                <Button variant="success" href={`/editar_produto/${produto.id}`}>Editar</Button>{' '}
                                                <Button variant="danger" onClick={() => handleRemoverProduto(produto.id)}>Remover</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </main>
        </section>
    );
};

export default Produtos;
