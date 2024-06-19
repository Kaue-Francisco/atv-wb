import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const VisualizarProduto = () => {
    const [produto, setProduto] = useState<Produto | undefined>(undefined);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarProduto = async () => {
            try {
                const response = await api.get(`/buscar/produto/${id}`);
                const data = await response.data;
                setProduto(data);
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
            }
        };

        buscarProduto();
    }, [id]);

    if (!produto) {
        return <div>Carregando...</div>;
    }

    return (
        <section>
            <main>
                <h1>Visualizar Produto: {produto.nome}</h1>
                <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>ID: {produto.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{produto.nome}</Card.Title>
                        <Card.Text>
                            Preço: R${produto.preco.toFixed(2)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="dark" href='/produtos'>Voltar</Button>
            </main>
        </section>
    );
};

export default VisualizarProduto;
