import React from 'react';
import { Button } from 'react-bootstrap';

const CadastrarServico = () => {
    return (
        <section>
            <main>
                <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" />
                        </div>
                        <div className="button-group" style={{ marginTop: '10px' }}>
                            <Button variant="dark" href="/">Voltar</Button>
                            <Button variant="success" type="submit" style={{ marginLeft: '5px' }}>Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarServico;