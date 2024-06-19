import React, { useState, useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';

interface ProdutoPorGenero {
    genero: string;
    nome: string;
    quantidade: string;
}

interface ServicoPorGenero {
    genero: string;
    nome: string;
    quantidade: string;
}

const ConsumidosPorGenero = () => {
    const [produtosPorGenero, setProdutosPorGenero] = useState<ProdutoPorGenero[]>([]);
    const [servicosPorGenero, setServicosPorGenero] = useState<ServicoPorGenero[]>([]);

    const fetchProdutosEServicosPorGenero = async () => {
        try {
            const response = await api.get('/listar/consumidosPorGenero');
            setProdutosPorGenero(response.data.produtosPorGenero);
            setServicosPorGenero(response.data.servicosPorGenero);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProdutosEServicosPorGenero();
    }, []);

    return (
        <section>
            <Container>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title><h1>Consumos</h1></Card.Title>
                        <Card.Text>Listagem de produtos e serviços separados por gênero.</Card.Text>
                    </Card.Body>
                </Card>
                <h2>Produtos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtosPorGenero.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.nome}</td>
                                <td>{produto.genero}</td>
                                <td>{produto.quantidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h2>Serviços</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicosPorGenero.map((servico, index) => (
                            <tr key={index}>
                                <td>{servico.nome}</td>
                                <td>{servico.genero}</td>
                                <td>{servico.quantidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ConsumidosPorGenero;
