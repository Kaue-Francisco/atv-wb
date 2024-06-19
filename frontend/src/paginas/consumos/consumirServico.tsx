import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { api } from '../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Servico {
    id: number;
    nome: string;
    preco: number;
}

const ConsumirServico = () => {
    const [servicosDisponiveis, setServicosDisponiveis] = useState<Servico[]>([]);
    const [servicosSelecionados, setServicosSelecionados] = useState<number[]>([0]);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarServicos = async () => {
            try {
                const response = await api.get('/listar/servico');
                setServicosDisponiveis(response.data);
            } catch (error) {
                console.error('Erro ao buscar serviços:', error);
            }
        };

        buscarServicos();
    }, []);

    const handleAdicionarServico = () => {
        setServicosSelecionados((prevState) => [...prevState, 0]);
    };

    const handleRemoverServico = (index: number) => {
        if (servicosSelecionados.length > 1) {
            setServicosSelecionados((prevState) => prevState.filter((_, i) => i !== index));
        } else {
            alert("Não é possível remover o último serviço");
        }
    };

    const handleChangeServico = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const { value } = e.target;
        const updatedServicos = [...servicosSelecionados];
        updatedServicos[index] = Number(value);
        setServicosSelecionados(updatedServicos);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await api.post(`/consumir/servico/${id}`, { servicos: servicosSelecionados });
            navigate(`/clientes/${id}`);
        } catch (error: any) {
            console.error('Erro ao consumir serviços:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <section>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form onSubmit={handleSubmit}>
                            {servicosSelecionados.map((servico, index) => (
                                <Form.Group controlId={`servicoSelect-${index}`} key={index}>
                                    <Form.Label>Selecione um serviço</Form.Label>
                                    <Form.Select 
                                        value={servico} 
                                        onChange={(e) => handleChangeServico(e, index)}
                                    >
                                        <option value={0}>Escolha...</option>
                                        {servicosDisponiveis.map((servicoDisponivel) => (
                                            <option key={servicoDisponivel.id} value={servicoDisponivel.id}>
                                                {servicoDisponivel.nome}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    {servicosSelecionados.length > 1 && (
                                        <Button 
                                            variant="danger" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRemoverServico(index);
                                            }}
                                            className="mt-2"
                                        >
                                            Remover
                                        </Button>
                                    )}
                                </Form.Group>
                            ))}
                            <Button variant="primary" onClick={handleAdicionarServico} className="mt-2">
                                Adicionar Serviço
                            </Button>
                            <Button variant="success" type="submit" className="mt-2">
                                Consumir Serviço
                            </Button>
                            <Button variant="secondary" onClick={() => navigate(-1)} className="mt-2">
                                Voltar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ConsumirServico;
