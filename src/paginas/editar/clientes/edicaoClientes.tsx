import { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

export class EditarCliente extends Component {
    render(){
        return (
            <section>
                <main>
                    <h1>Editar Cliente</h1>
                    <div className="forms">
                        <form>
                            <div className="name-fields">
                                <div className="field">
                                    <label htmlFor="Nome" >Nome:</label>
                                    <input type="text" defaultValue="Ana Oliveira"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Social">Nome social:</label>
                                    <input type="text" defaultValue="Aninha"/>
                                </div>
                            </div>
                            <div className="social-gender-fields">
                                <div className="field">
                                    <label htmlFor="Genero">Gênero:</label>
                                    <select name="genero" id="genero">
                                        <option>"Selecione seu gênero"</option>
                                        <option>Feminino</option>
                                        <option>Masculino</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="Telefone">Telefone:</label>
                                    <input type="text" defaultValue="(11) 1234-5678"/>
                                </div>
                            </div>
                            <div className="social-gender-fields">
                                <div className="field">
                                    <label htmlFor="cpf">CPF:</label>
                                    <input type="text" defaultValue="123.456.789-00" disabled/>
                                    <input type="date" defaultValue="2000-10-10" disabled/>
                                </div>
                                <div className="field">
                                    <label htmlFor="rg">RG:</label>
                                    <input type="text" defaultValue="12.345.678-9"/>
                                    <input type="date" defaultValue="2000-10-10"/>
                                </div>
                            </div>
                            <div className="button-group">
                                <Button variant="dark" style={{marginRight: '10px'}} href='/clientes'>Voltar</Button>
                                <Button className="submit" variant="success" type='submit'>Editar</Button>{' '}
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}