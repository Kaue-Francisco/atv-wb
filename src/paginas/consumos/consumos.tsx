import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Consumos = () => {
    const consumos = [
        'Listagem 10 clientes que mais consumiram em quantidade.',
        'Listagem todos clientes por gênero.',
        'Listagem geral de produtos e serviços mais consumidos.',
        'Listagem 10 clientes que menos consumiram produtos ou serviços.',
        'Listagem 5 clientes que mais consumiram em valor.',
        'Listagem dos serviços ou produtos mais consumidos por genero.'
    ];

    return (
        <section>
            <main>
                <h1>Consumos</h1>
                <div className="tables">
                    {consumos.map((consumo, index) => (
                        <Link to={`/consumosClientes`} key={index}>
                            <Card className="consumo-card">
                                <Card.Body>
                                    <Card.Title>{consumo}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Consumos;
