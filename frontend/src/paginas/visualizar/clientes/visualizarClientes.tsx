import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { api } from '../../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Telefone {
    id: number;
    numero: string;
}

interface Rg {
    id: number;
    numero: string;
    dataEmissao: string;
}

interface Cliente {
    id: number;
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCpf: string;
    telefones: Telefone[];
    rgs: Rg[];
}

const VisualizarCliente = () => {
    const [cliente, setCliente] = useState<Cliente | undefined>(undefined);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarCliente = async () => {
            try {
                const response = await api.get(`/buscar/${id}`);
                const data = await response.data;
                setCliente(data);
            } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            }
        };

        buscarCliente();
    }, [id]);

    if (!cliente) {
        return <div>Carregando...</div>;
    }

    return (
        <section>
            <main>
                <h1>Visualizar cliente: {cliente.nome}</h1>
                <div className="d-flex justify-content-between mb-3">
                    <Button variant="primary" href={`/produtos-consumidos/${id}`} className="me-2">Produtos Consumidos</Button>
                    <Button variant="warning" href={`/servicos-consumidos/${id}`} className="me-2">Serviços Consumidos</Button>
                    <Button variant="success" href={`/consumir-produto/${id}`} className="me-2">Consumir Produto</Button>
                    <Button variant="info" href={`/consumir-servico/${id}`}>Consumir Serviço</Button>
                </div>
                <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>ID: {cliente.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{cliente.nome}</Card.Title>
                        <Card.Text>
                            Nome Social: {cliente.nomeSocial}
                        </Card.Text>
                        <Card.Text>
                            CPF: {cliente.cpf}
                        </Card.Text>
                        <Card.Text>
                            Data Emissao CPF: {new Date(cliente.dataEmissaoCpf).toLocaleDateString()}
                        </Card.Text>
                        {cliente.rgs.map((rg, index) => (
                            <div key={index}>
                                <Card.Text>
                                    RG: {rg.numero}
                                </Card.Text>
                                <Card.Text>
                                    Data Emissao RG: {new Date(rg.dataEmissao).toLocaleDateString()}
                                </Card.Text>
                            </div>
                        ))}
                        {cliente.telefones.map((telefone, index) => (
                            <Card.Text key={index}>
                                Telefone: {telefone.numero}
                            </Card.Text>
                        ))}
                    </Card.Body>
                </Card>
                <Button style={{ marginBottom: '50px' }} variant="dark" href='/clientes'>Voltar</Button>
            </main>
        </section>
    );
}

export default VisualizarCliente;
