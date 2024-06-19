import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ClienteTelefoesRgs } from '../../interface/clienteInterface';
import './styles.css';

export class CadastrarClientes extends Component<{}, ClienteTelefoesRgs> {
    constructor(props: {}) {
        super(props);
        this.state = {
            telefones: [''],
            rgs: [{rg: '', dataEmissao: ''}],
        };
    }

    handleAdicionarCampo = (tipo: 'telefone' | 'rg') => {
        if (tipo === 'telefone') {
            this.setState((prevState) => ({
                telefones: [...prevState.telefones, '']
            }));
        } else if (tipo === 'rg') {
            this.setState((prevState) => ({
                rgs: [...prevState.rgs, {rg: '', dataEmissao: ''}]
            }));
        }
    };

    handleRemoverCampo = (index: number, tipo: 'telefone' | 'rg') => {
        if (tipo === 'telefone') {
            if (this.state.telefones.length > 1) {
                this.setState((prevState) => ({
                    telefones: prevState.telefones.filter((_, i) => i !== index)
                }));
            } else {
                console.log("Não é possível remover o último campo de telefone");
            }
        } else if (tipo === 'rg') {
            if (this.state.rgs.length > 1) {
                this.setState((prevState) => ({
                    rgs: prevState.rgs.filter((_, i) => i !== index)
                }));
            } else {
                console.log("Não é possível remover o último campo de RG");
            }
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, tipo: 'telefone' | 'rg', campo: 'rg' | 'dataEmissao') => {
        const { value } = e.target;
        if (tipo === 'telefone') {
            const telefones = [...this.state.telefones];
            telefones[index] = value;
            this.setState({ telefones });
        } else if (tipo === 'rg') {
            const rgs = [...this.state.rgs];
            rgs[index][campo] = value;
            this.setState({ rgs });
        }
    };

    render() {
        return (
            <section>
                <main>
                    <h1>Cadastrar Cliente</h1>
                    <div className="forms">
                        <form>
                            <div className="name-fields">
                                <div className="field">
                                    <label htmlFor="Nome">Nome:</label>
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="field">
                                    <label htmlFor="Social">Nome social:</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            
                            <div className="social-gender-fields">
                                <div className="field">
                                    <label htmlFor="Genero">Gênero:</label>
                                    <select name="genero" id="genero" className="select-field">
                                        <option value="">Selecione o Gênero</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="CPF">CPF:</label>
                                    <input type="text" className="input-field" placeholder="123.456.789-00" />
                                </div>
                                <div className="field">
                                    <label htmlFor="CPF">Data de emissão CPF:</label>
                                    <input type="date" className="input-field" placeholder="123.456.789-00" />
                                </div>
                            </div>

                            <div className="additional-fields">
                                {this.state.telefones.map((telefone, index) => (
                                    <div className="field" key={index}>
                                        <label htmlFor={`Telefone-${index}`}>Telefone:</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="11 99999-9999"
                                                value={telefone}
                                                onChange={(e) => this.handleChange(e, index, 'telefone', 'rg')}
                                            />
                                            {this.state.telefones.length > 1 && (
                                                <button 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleRemoverCampo(index, 'telefone');
                                                    }}
                                                    className='campo-rg'
                                                >
                                                    Remover
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="additional-fields">
                                {this.state.rgs.map((rg, index) => (
                                    <div className="field" key={index}>
                                        <label htmlFor={`RG-${index}`}>RG:</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="12.345.678-9"
                                                value={rg.rg}
                                                onChange={(e) => this.handleChange(e, index, 'rg', 'rg')}
                                            />
                                             <input
                                                type="date"
                                                className="input-field"
                                                placeholder="Data de emissão RG"
                                                value={rg.dataEmissao}
                                                onChange={(e) => this.handleChange(e, index, 'rg', 'dataEmissao')}
                                            />
                                            {this.state.rgs.length > 1 && (
                                                <button 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleRemoverCampo(index, 'rg');
                                                    }}
                                                    className='campo-rg'
                                                >
                                                    Remover
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="add-button">
                                <Button variant="primary" onClick={() => this.handleAdicionarCampo('telefone')}>Adicionar Telefone</Button>
                                <Button variant="primary" onClick={() => this.handleAdicionarCampo('rg')}>Adicionar RG</Button>
                            </div>

                            <div className="button-group">
                                <Button variant="dark" href='/'>Voltar</Button>
                                <Button variant="success" type='submit'>Cadastrar</Button>
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}