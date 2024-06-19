import React, { Component, ChangeEvent, FormEvent } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';

interface State {
    servicos: string[];
}

export class ConsumirServico extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            servicos: [''],
        };
    }

    handleAdicionarServico = () => {
        this.setState((prevState) => ({
            servicos: [...prevState.servicos, '']
        }));
    };

    handleRemoverServico = (index: number) => {
        if (this.state.servicos.length > 1) {
            this.setState((prevState) => ({
                servicos: prevState.servicos.filter((_, i) => i !== index)
            }));
        } else {
            console.log("Não é possível remover o último serviço");
        }
    };

    handleChangeServico = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const { value } = e.target;
        const servicos = [...this.state.servicos];
        servicos[index] = value;
        this.setState({ servicos });
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Serviços consumidos:', this.state.servicos);
    };

    render() {
        return (
            <section>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form onSubmit={this.handleSubmit}>
                                {this.state.servicos.map((servico, index) => (
                                    <Form.Group controlId={`servicoSelect-${index}`} key={index}>
                                        <Form.Label>Selecione um serviço</Form.Label>
                                        <Form.Select 
                                            value={servico} 
                                            onChange={(e) => this.handleChangeServico(e, index)}
                                        >
                                            <option value="">Escolha...</option>
                                            <option value="Corte de cabelo">Corte de cabelo</option>
                                            <option value="Coloração de cabelo">Coloração de cabelo</option>
                                            <option value="Manicure">Manicure</option>
                                        </Form.Select>
                                        {this.state.servicos.length > 1 && (
                                            <Button 
                                                variant="danger" 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleRemoverServico(index);
                                                }}
                                            >
                                                Remover
                                            </Button>
                                        )}
                                    </Form.Group>
                                ))}
                                <Button variant="primary" onClick={this.handleAdicionarServico}>
                                    Adicionar Serviço
                                </Button>
                                <Button variant="success" type="submit">
                                    Consumir Serviço
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