import React, { useState, useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';

interface Item {
    id: number;
    nome: string;
    preco: number;
    _count: {
        usuarios: number;
    };
}

interface ProdutosEServicosData {
    produtos: Item[];
    servicos: Item[];
}

const ProdutosEServicos = () => {
    const [data, setData] = useState<ProdutosEServicosData>({ produtos: [], servicos: [] });

    const fetchConsumosClientes = async () => {
        try {
            const response = await api.get('/listar/produtosEServicosMaisConsumidos');
            setData(response.data);
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
                        <Card.Text>Listagem de produtos e serviços mais consumidos.</Card.Text>
                    </Card.Body>
                </Card>
                
                <h2>Produtos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Quantidade de Usuários</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>{produto._count.usuarios}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <h2>Serviços</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Quantidade de Usuários</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.servicos.map((servico) => (
                            <tr key={servico.id}>
                                <td>{servico.nome}</td>
                                <td>{servico.preco}</td>
                                <td>{servico._count.usuarios}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ProdutosEServicos;
