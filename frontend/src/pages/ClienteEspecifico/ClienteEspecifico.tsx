import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'; // Arquivo CSS personalizado

const DetalhesCliente = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
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

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                console.log('http://localhost:32832/cliente/' + id)
                const response = await fetch(`http://localhost:32832/cliente/${id}`);
                if (!response.ok) {
                    console.error('Erro ao buscar cliente:', response.status);
                    const data = await response.json();
                    setCliente(data);
                    return;
                }
                const data = await response.json();
                setCliente(data);
            } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            }
        };

        fetchCliente();
    }, [id]);

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
            const response = await fetch('http://localhost:32832/cliente/atualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });

            if (!response.ok) {
                console.error('Erro ao atualizar cliente:', response.status);
                navigate('/clientes');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            navigate('/clientes');
        }
    }

    const handleDelete = async () => {
        try {
            const response = await fetch('http://localhost:32832/cliente/excluir', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            if (!response.ok) {
                console.error('Erro ao deletar cliente:', response.status);
                navigate('/clientes');
            }

            // Tente ler a resposta do servidor, se houver.
            let data;
            try {
                data = await response.json();
                console.log(data);
            } catch (jsonError) {
                console.log('Nenhuma resposta JSON recebida do servidor');
            }

            navigate('/clientes');
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">Detalhes do Cliente</h2>
            <div className="form-grid">
                <label className="form-label">
                    <span className="form-label-text">Nome</span>
                    <input 
                        type="text" 
                        name="nome" 
                        value={cliente.nome}
                        onChange={handleInputChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Sobrenome</span>
                    <input 
                        type="text" 
                        name="sobreNome" 
                        value={cliente.sobreNome}
                        onChange={handleInputChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Email</span>
                    <input 
                        type="email" 
                        name="email" 
                        value={cliente.email}
                        onChange={handleInputChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Estado</span>
                    <input 
                        type="text" 
                        name="estado" 
                        value={cliente.endereco.estado}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Cidade</span>
                    <input 
                        type="text" 
                        name="cidade" 
                        value={cliente.endereco.cidade}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Bairro</span>
                    <input 
                        type="text" 
                        name="bairro" 
                        value={cliente.endereco.bairro}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Rua</span>
                    <input 
                        type="text" 
                        name="rua" 
                        value={cliente.endereco.rua}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Número</span>
                    <input 
                        type="text" 
                        name="numero" 
                        value={cliente.endereco.numero}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Código Postal</span>
                    <input 
                        type="text" 
                        name="codigoPostal" 
                        value={cliente.endereco.codigoPostal}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <span className="form-label-text">Informações Adicionais</span>
                    <input 
                        type="text" 
                        name="informacoesAdicionais" 
                        value={cliente.endereco.informacoesAdicionais}
                        onChange={handleEnderecoChange} 
                        className="form-input"
                    />
                </label>
                {cliente.telefones.map((telefone, index) => (
                    <div key={index} className="telefone-container">
                        <label className="form-label">
                            <span className="form-label-text">DDD</span>
                            <input 
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
                    value="Atualizar Cliente" 
                    className="submit-button"
                />
                <button type="button" onClick={handleDelete} className="delete-button">
                    Deletar Cliente
                </button>
            </div>
        </form>
    );
};

export default DetalhesCliente;
