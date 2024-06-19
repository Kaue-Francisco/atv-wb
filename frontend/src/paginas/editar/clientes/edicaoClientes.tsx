import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { api } from '../../../utils/api';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';

interface Telefone {
    id: number;
    numero: string;
}

interface Rg {
    id: number;
    numero: string;
    dataEmissao: string;
}

interface RgEditado {
    numero: string;
    dataEmissao: string;
}

interface Cliente {
    id: number;
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCpf: string;
    telefones: Telefone[];
    rgs: Rg[];
}

const EditarCliente = () => {
    const [cliente, setCliente] = React.useState<Cliente>();
    const { id } = useParams<{ id: string }>();
    const [nome, setNome] = React.useState<string>('');
    const [nomeSocial, setNomeSocial] = React.useState<string>('');
    const [cpf, setCpf] = React.useState<string>('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = React.useState<string>('');
    const [telefones, setTelefones] = React.useState<string[]>(['']);
    const [rgs, setRgs] = React.useState<RgEditado[]>([{ numero: '', dataEmissao: '' }]);
    const navigate = useNavigate();

    useEffect(() => {
        const buscarCliente = async () => {
            try {
                const response = await api.get(`/buscar/${id}`);
                const data = await response.data;
                
                setCliente(data);
                setNome(data.nome);
                setNomeSocial(data.nomeSocial);
                setCpf(data.cpf);
                setDataEmissaoCpf(data.dataEmissaoCpf.split('T')[0]);
                setTelefones(data.telefones.map((telefone: Telefone) => telefone.numero));
                setRgs(data.rgs.map((rg: Rg) => ({ numero: rg.numero, dataEmissao: rg.dataEmissao.split('T')[0] })));
            } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            }
        };

        buscarCliente();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.put(`/editar/${id}`, {
                nome: nome,
                nomeSocial: nomeSocial,
                cpf: cpf,
                dataEmissaoCpf: dataEmissaoCpf,
                telefones: telefones,
                rgs: rgs,
            });
            alert('Cliente editado com sucesso!');
            navigate('/clientes');
        } catch (error) {
            console.error('Erro ao editar cliente:', error);
        }
    }

    return (
        <section>
            <main>
                <h1>Editar Cliente</h1>
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <div className="name-fields">
                            <div className="field">
                                <label htmlFor="Nome">Nome:</label>
                                <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input type="text" onChange={e => setNomeSocial(e.target.value)} value={nomeSocial} />
                            </div>
                        </div>
                        <div className="name-fields">
                            <div className="field">
                                <label htmlFor="CPF">CPF:</label>
                                <input type="text" onChange={e => setCpf(e.target.value)} value={cpf} />
                            </div>
                            <div className="field">
                                <label htmlFor="Data">Data de emissão do CPF:</label>
                                <input type="date" onChange={e => setDataEmissaoCpf(e.target.value)} value={dataEmissaoCpf} />
                            </div>
                        </div>
                        {telefones.map((telefone, index) => (
                            <div className="name-fields" key={index}>
                                <div className="field">
                                    <label htmlFor="Telefone">Telefone:</label>
                                    <input type="text" value={telefone} onChange={(e) => {
                                        const updatedTelefones = [...telefones];
                                        updatedTelefones[index] = e.target.value;
                                        setTelefones(updatedTelefones);
                                    }} />
                                </div>
                            </div>
                        ))}
                        {rgs.map((rg, index) => (
                            <div className="name-fields" key={index}>
                                <div className="field">
                                    <label htmlFor="RG">RG:</label>
                                    <input type="text" value={rg.numero} onChange={(e) => {
                                        const updatedRgs = [...rgs];
                                        updatedRgs[index].numero = e.target.value;
                                        setRgs(updatedRgs);
                                    }} />
                                    <input type="date" value={rg.dataEmissao} onChange={(e) => {
                                        const updatedRgs = [...rgs];
                                        updatedRgs[index].dataEmissao = e.target.value;
                                        setRgs(updatedRgs);
                                    }} />
                                </div>
                            </div>
                        ))}
                        <div className="button-group">
                            <Button variant="dark" style={{ marginRight: '10px' }} href='/clientes'>Voltar</Button>
                            <Button className="submit" variant="success" type='submit'>Editar</Button>{' '}
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default EditarCliente;
