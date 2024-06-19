import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ClienteTelefoesRgs } from '../../interface/clienteInterface';
import './styles.css';

const CadastrarClientes = () => {
    const [telefones, setTelefones] = useState<string[]>(['']);
    const [rgs, setRgs] = useState<ClienteTelefoesRgs[]>([{ telefones: [''], rgs: [{ rg: '', dataEmissao: '' }] }]);

    const handleAdicionarCampo = (tipo: 'telefone' | 'rg') => {
        if (tipo === 'telefone') {
            setTelefones((prevTelefones) => [...prevTelefones, '']);
        } else if (tipo === 'rg') {
            setRgs((prevRgs) => [...prevRgs, { telefones: [''], rgs: [{ rg: '', dataEmissao: '' }] }]);
        }
    };

    const handleRemoverCampo = (index: number, tipo: 'telefone' | 'rg') => {
        if (tipo === 'telefone') {
            if (telefones.length > 1) {
                setTelefones((prevTelefones) => prevTelefones.filter((_, i) => i !== index));
            } else {
                console.log("Não é possível remover o último campo de telefone");
            }
        } else if (tipo === 'rg') {
            if (rgs.length > 1) {
                setRgs((prevRgs) => prevRgs.filter((_, i) => i !== index));
            } else {
                console.log("Não é possível remover o último campo de RG");
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, tipo: 'telefone' | 'rg', campo: 'rg' | 'dataEmissao') => {
        const { value } = e.target;
        if (tipo === 'telefone') {
            const updatedTelefones = [...telefones];
            updatedTelefones[index] = value;
            setTelefones(updatedTelefones);
        } else if (tipo === 'rg') {
            const updatedRgs = [...rgs];
            updatedRgs[index].rgs[0][campo] = value;
            setRgs(updatedRgs);
        }
    };

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
                            {telefones.map((telefone, index) => (
                                <div className="field" key={index}>
                                    <label htmlFor={`Telefone-${index}`}>Telefone:</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="input-field"
                                            placeholder="11 99999-9999"
                                            value={telefone}
                                            onChange={(e) => handleChange(e, index, 'telefone', 'rg')}
                                        />
                                        {telefones.length > 1 && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleRemoverCampo(index, 'telefone');
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
                            {rgs.map((rg, index) => (
                                <div className="field" key={index}>
                                    <label htmlFor={`RG-${index}`}>RG:</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="input-field"
                                            placeholder="12.345.678-9"
                                            value={rg.rgs[0].rg}
                                            onChange={(e) => handleChange(e, index, 'rg', 'rg')}
                                        />
                                        <input
                                            type="date"
                                            className="input-field"
                                            placeholder="Data de emissão RG"
                                            value={rg.rgs[0].dataEmissao}
                                            onChange={(e) => handleChange(e, index, 'rg', 'dataEmissao')}
                                        />
                                        {rgs.length > 1 && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleRemoverCampo(index, 'rg');
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
                            <Button variant="primary" onClick={() => handleAdicionarCampo('telefone')}>Adicionar Telefone</Button>
                            <Button variant="primary" onClick={() => handleAdicionarCampo('rg')}>Adicionar RG</Button>
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
};

export default CadastrarClientes;
