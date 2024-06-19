    import { Component } from 'react';
    import { Button } from 'react-bootstrap';
    import './styles.css'

    export class Home extends Component {
        render(){
            return (
                <section>
                    <main>
                        <section className="section-container">
                            <img alt="Barber Shop Interior" className="image" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className="overlay">
                                <h1 className="title">Salão WB</h1>
                                <p className="description">
                                    Aqui você poderá gerenciar Clientes, Produtos, Serviços e o consumo relacionado aos clientes.
                                </p>
                            </div>
                        </section>

                    </main>
                </section>
            );
        }
    }