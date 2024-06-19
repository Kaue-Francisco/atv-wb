import React from 'react';
import { Button, Card } from 'react-bootstrap';

const VisualizarProduto = () => {
    return (
        <section>
            <main>
                <h1>Visualizar Produto: "Shampoo Hidratante"</h1>
                <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>ID: 2</Card.Header>
                    <Card.Body>
                        <Card.Title>Shampoo Hidratante</Card.Title>
                        <Card.Text>
                            Preço: R$12
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="dark" href='/produtos'>Voltar</Button>
            </main>
        </section>
    );
};

export default VisualizarProduto;
