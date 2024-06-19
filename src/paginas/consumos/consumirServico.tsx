import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';

const ConsumirServico = () => {
    const [servicos, setServicos] = useState<string[]>(['']);

    const handleAdicionarServico = () => {
        setServicos(prevState => [...prevState, '']);
    };

    const handleRemoverServico = (index: number) => {
        if (servicos.length > 1) {
            setServicos(prevState => prevState.filter((_, i) => i !== index));
        } else {
            console.log("Não é possível remover o último serviço");
        }
    };

    const handleChangeServico = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        const { value } = e.target;
        const updatedServicos = [...servicos];
        updatedServicos[index] = value;
        setServicos(updatedServicos);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Serviços consumidos:', servicos);
    };

    return (
        <section>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form onSubmit={handleSubmit}>
                            {servicos.map((servico, index) => (
                                <Form.Group controlId={`servicoSelect-${index}`} key={index}>
                                    <Form.Label>Selecione um serviço</Form.Label>
                                    <Form.Select
                                        value={servico}
                                        onChange={(e) => handleChangeServico(e, index)}
                                    >
                                        <option value="">Escolha...</option>
                                        <option value="Corte de cabelo">Corte de cabelo</option>
                                        <option value="Coloração de cabelo">Coloração de cabelo</option>
                                        <option value="Manicure">Manicure</option>
                                    </Form.Select>
                                    {servicos.length > 1 && (
                                        <Button
                                            variant="danger"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRemoverServico(index);
                                            }}
                                        >
                                            Remover
                                        </Button>
                                    )}
                                </Form.Group>
                            ))}
                            <Button variant="primary" onClick={handleAdicionarServico}>
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
};

export default ConsumirServico;
