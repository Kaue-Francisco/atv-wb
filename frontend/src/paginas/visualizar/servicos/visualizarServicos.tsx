import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Servico {
    id: number;
    nome: string;
    preco: number;
}

const VisualizarServico = () => {
    const [servico, setServico] = useState<Servico | undefined>(undefined);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarServico = async () => {
            try {
                const response = await api.get(`/buscar/servico/${id}`);
                const data = await response.data;
                setServico(data);
            } catch (error) {
                console.error('Erro ao buscar serviço:', error);
            }
        };

        buscarServico();
    }, [id]);

    if (!servico) {
        return <div>Carregando...</div>;
    }

    return (
        <section>
            <main>
                <h1>Visualizar Serviço: {servico.nome}</h1>
                <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>ID: {servico.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{servico.nome}</Card.Title>
                        <Card.Text>
                            Preço: R${servico.preco.toFixed(2)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="dark" href='/servicos'>Voltar</Button>
            </main>
        </section>
    );
};

export default VisualizarServico;
