import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Consumos = () => {
    const consumos = [
        { title: 'Listagem 10 clientes que mais consumiram em quantidade.', path: '/clientes-por-quantidade' },
        { title: 'Listagem todos clientes por gênero.', path: '/clientes-por-genero' },
        { title: 'Listagem geral de produtos e serviços mais consumidos.', path: '/produtos-servicos-mais-consumidos' },
        { title: 'Listagem 10 clientes que menos consumiram produtos ou serviços.', path: '/clientes-por-menos-consumo' },
        { title: 'Listagem 5 clientes que mais consumiram em valor.', path: '/clientes-por-valor' },
        { title: 'Listagem dos serviços ou produtos mais consumidos por gênero.', path: '/produtos-servicos-mais-consumidos-genero'}    
    ];

    return (
        <section>
            <main>
                <h1>Consumos</h1>
                <div className="tables">
                    {consumos.map((consumo, index) => (
                        <Link to={consumo.path} key={index}>
                            <Card className="consumo-card">
                                <Card.Body>
                                    <Card.Title>{consumo.title}</Card.Title>
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
