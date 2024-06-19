import React, { useEffect, useState } from 'react';

export async function fetchClientes(): Promise<any> {
    const response = await fetch('http://localhost:32832/clientes');
    const data = await response.json();
    return data;
}

const Clientes = () => {
    const [clientes, setClientes] = useState<any[]>([]);

    useEffect(() => {
        fetchClientes()
            .then((data) => {
                setClientes(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar clientes:', error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">Lista de Clientes</h1>
            <p className='text-2xl fron-blod mb-6'>Clique no cliente para editar</p>
            {clientes.map((cliente) => (
                <a href={`/cliente/${cliente.id}`}>
                <div key={cliente.id} className="bg-white shadow-md rounded-lg p-6 mb-6 hover:bg-gray-100 shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-2">{cliente.nome} {cliente.sobreNome}</h2>
                    <p className="text-gray-700 mb-1">Email: {cliente.email || 'N/A'}</p>
                    <p className="text-gray-700 mb-1">Rua: {cliente.endereco.rua || 'N/A'}, Numero: {cliente.endereco.numero || 'N/A'}</p>
                    <p className="text-gray-700 mb-1">Bairro: {cliente.endereco.bairro || 'N/A'}, CIdade: {cliente.endereco.cidade || 'N/A'}, Estado: {cliente.endereco.estado || 'N/A'}</p>
                    <p className="text-gray-700 mb-1">CEP: {cliente.endereco.codigoPostal || 'N/A'}</p>
                    <p className="text-gray-700 mb-1">informacoesAdicionais: {cliente.endereco.informacoesAdicionais || 'N/A'}</p>
                    <p className="text-gray-700">
                        Telefone(s): {cliente.telefones.map((tel: any) => (
                            <span key={tel.id} className="mr-2">{tel.ddd} {tel.numero || 'N/A'}</span>
                        ))}
                    </p>
                </div></a>
            ))}
        </div>
    );
};

export default Clientes;
