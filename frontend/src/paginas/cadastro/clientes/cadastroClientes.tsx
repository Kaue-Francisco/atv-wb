import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ClienteRgs } from '../../interface/clienteInterface';
import { api } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import './styles.css';

interface Rg {
  numero: string;
  dataEmissao: string;
}

const CadastrarClientes = () => {
    const [telefones, setTelefones] = useState<string[]>(['']);
    const [rgs, setRgs] = useState<Rg[]>([{ numero: '', dataEmissao: '' }]);
    const [nome, setNome] = useState<string>('');
    const [nomeSocial, setNomeSocial] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState<string>('');
    const navigate = useNavigate();

    const handleAdicionarCampo = (tipo: 'telefone' | 'rg') => {
        if (tipo === 'telefone') {
            setTelefones((prevTelefones) => [...prevTelefones, '']);
        } else if (tipo === 'rg') {
            setRgs((prevRgs) => [...prevRgs, { numero: '', dataEmissao: '' }]);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, tipo: 'telefone' | 'rg', campo: 'numero' | 'dataEmissao') => {
        const { value } = e.target;
        if (tipo === 'telefone') {
            const updatedTelefones = [...telefones];
            updatedTelefones[index] = value;
            setTelefones(updatedTelefones);
        } else if (tipo === 'rg' && campo) {
            const updatedRgs = [...rgs];
            updatedRgs[index][campo] = value;
            setRgs(updatedRgs);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formattedTelefones = telefones.map(telefone => ({ numero: telefone }));
            const formattedRgs = rgs.map(rg => ({
                numero: rg.numero,
                dataEmissao: new Date(rg.dataEmissao).toISOString()
            }));

            await api.post('/cadastro/', {
                nome: nome,
                nomeSocial: nomeSocial,
                genero: genero,
                cpf: cpf,
                dataEmissaoCpf: new Date(dataEmissaoCpf).toISOString(),
                telefones: formattedTelefones,
                rgs: formattedRgs
            });

            // Resetar os valores dos inputs após o cadastro
            setTelefones(['']);
            setRgs([{ numero: '', dataEmissao: '' }]);
            alert('Cliente cadastrado com sucesso!');
            navigate('/');
        } catch (error) {
            let messageError: any = error;
            alert(messageError.response.data.error || 'Erro ao cadastrar cliente');
        }
    };

    return (
        <section>
            <main>
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <div className="name-fields">
                            <div className="field">
                                <label htmlFor="Nome">Nome:</label>
                                <input type="text" onChange={e => setNome(e.target.value)} className="input-field" required/>
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input type="text" onChange={e => setNomeSocial(e.target.value)} className="input-field" required/>
                            </div>
                        </div>

                        <div className="social-gender-fields">
                            <div className="field">
                                <label htmlFor="Genero">Gênero:</label>
                                <select name="genero" id="genero" onChange={e => setGenero(e.target.value)} className="select-field" required>
                                    <option value="">Selecione o Gênero</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Masculino">Masculino</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="CPF">CPF:</label>
                                <input type="text" onChange={e => setCpf(e.target.value)} className="input-field" placeholder="123.456.789-00" required/>
                            </div>
                            <div className="field">
                                <label htmlFor="CPF">Data de emissão CPF:</label>
                                <input type="date" onChange={e => setDataEmissaoCpf(e.target.value)} className="input-field" required/>
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
                                            onChange={(e) => handleChange(e, index, 'telefone', 'numero')}
                                            required
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
                                            value={rg.numero}
                                            onChange={(e) => handleChange(e, index, 'rg', 'numero')}
                                            required
                                        />
                                        <input
                                            type="date"
                                            className="input-field"
                                            placeholder="Data de emissão RG"
                                            value={rg.dataEmissao}
                                            onChange={(e) => handleChange(e, index, 'rg', 'dataEmissao')}
                                            required
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
