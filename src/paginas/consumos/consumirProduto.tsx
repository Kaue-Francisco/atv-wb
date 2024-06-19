import React, { Component, ChangeEvent, FormEvent } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { produtos } from '../../data';

interface State {
    produtos: string[];
}

export class ConsumirProduto extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            produtos: [''],
        };
    }

    handleAdicionarProduto = () => {
        this.setState((prevState) => ({
            produtos: [...prevState.produtos, '']
        }));
    };

    handleRemoverProduto = (index: number) => {
        if (this.state.produtos.length > 1) {
            this.setState((prevState) => ({
                produtos: prevState.produtos.filter((_, i) => i !== index)
            }));
        } else {
            console.log("Não é possível remover o último produto");
        }
    };

    handleChangeProduto = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const { value } = e.target;
        const produtos = [...this.state.produtos];
        produtos[index] = value;
        this.setState({ produtos });
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Produtos consumidos:', this.state.produtos);
    };

    render() {
        return (
            <section>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form onSubmit={this.handleSubmit}>
                                {this.state.produtos.map((produto, index) => (
                                    <Form.Group controlId={`produtoSelect-${index}`} key={index}>
                                        <Form.Label>Selecione um produto</Form.Label>
                                        <Form.Select 
                                            value={produto} 
                                            onChange={(e) => this.handleChangeProduto(e, index)}
                                        >
                                            <option value="">Escolha...</option>
                                            <option value="Shampoo Hidratante">Shampoo Hidratante</option>
                                            <option value="Sabonete Esfoliante">Sabonete Esfoliante</option>
                                            <option value="Creme Hidratante Corporal">Creme Hidratante Corporal</option>
                                        </Form.Select>
                                        {this.state.produtos.length > 1 && (
                                            <Button 
                                                variant="danger" 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleRemoverProduto(index);
                                                }}
                                            >
                                                Remover
                                            </Button>
                                        )}
                                    </Form.Group>
                                ))}
                                <Button variant="primary" onClick={this.handleAdicionarProduto}>
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
    }
}