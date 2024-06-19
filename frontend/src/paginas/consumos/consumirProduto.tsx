import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { api } from '../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const ConsumirProduto = () => {
    const [produtosDisponiveis, setProdutosDisponiveis] = useState<Produto[]>([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState<number[]>([0]);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const buscarProdutos = async () => {
            try {
                const response = await api.get('/listar/produto');
                setProdutosDisponiveis(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        buscarProdutos();
    }, []);

    const handleAdicionarProduto = () => {
        setProdutosSelecionados((prevState) => [...prevState, 0]);
    };

    const handleRemoverProduto = (index: number) => {
        if (produtosSelecionados.length > 1) {
            setProdutosSelecionados((prevState) => prevState.filter((_, i) => i !== index));
        } else {
            console.log("Não é possível remover o último produto");
        }
    };

    const handleChangeProduto = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const { value } = e.target;
        const updatedProdutos = [...produtosSelecionados];
        updatedProdutos[index] = Number(value);
        setProdutosSelecionados(updatedProdutos);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await api.post(`/consumir/produto/${id}`, { produtos: produtosSelecionados });
            navigate(`/clientes/${id}`);
        } catch (error: any) {
            console.error('Erro ao consumir produtos:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <section>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form onSubmit={handleSubmit}>
                            {produtosSelecionados.map((produto, index) => (
                                <Form.Group controlId={`produtoSelect-${index}`} key={index}>
                                    <Form.Label>Selecione um produto</Form.Label>
                                    <Form.Select 
                                        value={produto} 
                                        onChange={(e) => handleChangeProduto(e, index)}
                                    >
                                        <option value={0}>Escolha...</option>
                                        {produtosDisponiveis.map((produtoDisponivel) => (
                                            <option key={produtoDisponivel.id} value={produtoDisponivel.id}>
                                                {produtoDisponivel.nome}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    {produtosSelecionados.length > 1 && (
                                        <Button 
                                            variant="danger" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRemoverProduto(index);
                                            }}
                                            className="mt-2"
                                        >
                                            Remover
                                        </Button>
                                    )}
                                </Form.Group>
                            ))}
                            <Button variant="primary" onClick={handleAdicionarProduto} className="mt-2">
                                Adicionar Produto
                            </Button>
                            <Button variant="success" type="submit" className="mt-2">
                                Consumir Produto
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

export default ConsumirProduto;
