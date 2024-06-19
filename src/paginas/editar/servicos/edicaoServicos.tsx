import React from 'react';
import { Button } from 'react-bootstrap';

const EditarServico = () => {
    return (
        <section>
            <main>
                <h1>Editar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" defaultValue="Corte de Cabelo"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="50"/>
                        </div>
                        <div className='submit'>
                            <Button style={{marginRight: "10px"}} variant="dark" href='/servicos'>Voltar</Button>
                            <Button variant="success" type='submit'>Editar</Button>{' '}
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default EditarServico;
