import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Arquivo CSS personalizado

const CadastroCliente = () => {
    const [cliente, setCliente] = useState({
        nome: '',
        sobreNome: '',
        email: '',
        endereco: {
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            codigoPostal: '',
            informacoesAdicionais: ''
        },
        telefones: [
            {
                ddd: '',
                numero: ''
            }
        ]
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente(prevState => ({
            ...prevState,
            endereco: {
                ...prevState.endereco,
                [name]: value
            }
        }));
    }

    const handleTelefoneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente(prevState => ({
            ...prevState,
            telefones: prevState.telefones.map((telefone, i) => 
                i === index ? { ...telefone, [name]: value } : telefone
            )
        }));
    }

    const addTelefone = () => {
        setCliente(prevState => ({
            ...prevState,
            telefones: [...prevState.telefones, { ddd: '', numero: '' }]
        }));
    }

    const removeTelefone = (index: number) => {
        setCliente(prevState => ({
            ...prevState,
            telefones: prevState.telefones.filter((_, i) => i !== index)
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:32832/cliente/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });

            if (!response.ok) {
                console.error('Erro na resposta do servidor:', response.status);
                navigate('/');
            }

            const responseText = await response.text();

            if (!responseText) {
                console.error('Resposta do servidor está vazia');
                navigate('/');
            }

            const data = JSON.parse(responseText);
            console.log(data);
        } catch (error) {
            console.error('Erro ao processar a resposta:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">Cadastro de Cliente</h2>
            <div className="form-grid">
                <label className="form-label">
                    <span className="form-label-text">Nome</span>
                    <input required
                        type="text" 
                        name="nome" 
                        onChange={handleInputChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Sobrenome</span>
                    <input required
                        type="text" 
                        name="sobreNome" 
                        onChange={handleInputChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Email</span>
                    <input required
                        type="email" 
                        name="email" 
                        onChange={handleInputChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Estado</span>
                    <input required
                        type="text" 
                        name="estado" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Cidade</span>
                    <input required
                        type="text" 
                        name="cidade" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Bairro</span>
                    <input required
                        type="text" 
                        name="bairro" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Rua</span>
                    <input required
                        type="text" 
                        name="rua" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Número</span>
                    <input required
                        type="text" 
                        name="numero" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Código Postal</span>
                    <input required
                        type="text" 
                        name="codigoPostal" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Informações Adicionais</span>
                    <input required
                        type="text" 
                        name="informacoesAdicionais" 
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                {cliente.telefones.map((telefone, index) => (
                    <div key={index} className="telefone-container">
                        <label className="form-label">
                            <span className="form-label-text">DDD</span>
                            <input required
                                type="text" 
                                name="ddd" 
                                value={telefone.ddd} 
                                onChange={(e) => handleTelefoneChange(index, e)} 
                                className="form-input"
                            />
                        </label>
                        <label className="form-label">
                            <span className="form-label-text">Número de Telefone</span>
                            <input 
                                type="text" 
                                name="numero" 
                                value={telefone.numero} 
                                onChange={(e) => handleTelefoneChange(index, e)} 
                                className="form-input"
                            />
                        </label>
                        {cliente.telefones.length > 1 && (
                            <button type="button" onClick={() => removeTelefone(index)} className="remove-button font-bold">
                                Remover Telefone
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addTelefone} className="add-button font-bold">
                    Adicionar Telefone
                </button>
            </div>
            <div className="mt-6">
                <input 
                    type="submit" 
                    value="Cadastrar Cliente" 
                    className="submit-button"
                />
            </div>
        </form>
    );
};

export default CadastroCliente;
