import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { produtos } from '../../data';

const ConsumirProduto = () => {
    const [produtos, setProdutos] = useState<string[]>(['']);

    const handleAdicionarProduto = () => {
        setProdutos((prevState) => [...prevState, '']);
    };

    const handleRemoverProduto = (index: number) => {
        if (produtos.length > 1) {
            setProdutos((prevState) => prevState.filter((_, i) => i !== index));
        } else {
            console.log("Não é possível remover o último produto");
        }
    };

    const handleChangeProduto = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const { value } = e.target;
        const updatedProdutos = [...produtos];
        updatedProdutos[index] = value;
        setProdutos(updatedProdutos);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Produtos consumidos:', produtos);
    };

    return (
        <section>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form onSubmit={handleSubmit}>
                            {produtos.map((produto, index) => (
                                <Form.Group controlId={`produtoSelect-${index}`} key={index}>
                                    <Form.Label>Selecione um produto</Form.Label>
                                    <Form.Select 
                                        value={produto} 
                                        onChange={(e) => handleChangeProduto(e, index)}
                                    >
                                        <option value="">Escolha...</option>
                                        <option value="Shampoo Hidratante">Shampoo Hidratante</option>
                                        <option value="Sabonete Esfoliante">Sabonete Esfoliante</option>
                                        <option value="Creme Hidratante Corporal">Creme Hidratante Corporal</option>
                                    </Form.Select>
                                    {produtos.length > 1 && (
                                        <Button 
                                            variant="danger" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRemoverProduto(index);
                                            }}
                                        >
                                            Remover
                                        </Button>
                                    )}
                                </Form.Group>
                            ))}
                            <Button variant="primary" onClick={handleAdicionarProduto}>
                                Adicionar Produto
                            </Button>
                            <Button variant="success" type="submit">
                                Consumir Produto
                            </Button>
                            <Button variant="secondary" onClick={() => window.history.back()}>
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
