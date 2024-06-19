import { Request, Response } from 'express';
import ServiceCliente from '../../services/cliente/serviceCliente';
import { rgCliente } from '../../interface/clienteInterface';

const serviceCliente = new ServiceCliente();

export default class ControllerCliente {
    // #region Cadastro Cliente
    public async cadastro(req: Request, res: Response) {
        // Método de Cadastrar Cliente
        try {
            const { nome, nomeSocial, genero, cpf, dataEmissaoCpf, telefones, rgs } = req.body;
            const cliente = await serviceCliente.cadastro(
                nome, 
                nomeSocial, 
                genero,
                cpf, 
                new Date(dataEmissaoCpf), 
                telefones, 
                rgs.map((rg: rgCliente) => ({ numero: rg.numero, dataEmissao: new Date(rg.dataEmissao) }))
            );

            res.status(201).json(cliente);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Listar Clientes
    public async listar(req: Request, res: Response) {
        // Método de Listar Clientes
        try {
            const clientes = await serviceCliente.listar();

            res.status(200).json(clientes);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Remover Cliente
    public async remover(req: Request, res: Response) {
        // Método de Remover Cliente
        try {
            const { id } = req.params;
            await serviceCliente.remover(Number(id));

            res.status(204).end();
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Buscar Cliente
    public async buscar(req: Request, res: Response) {
        // Método de Buscar Cliente
        try {
            const { id } = req.params;
            const cliente = await serviceCliente.buscar(Number(id));

            res.status(200).json(cliente);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Editar Cliente
    public async editar(req: Request, res: Response) {
        // Método de Editar Cliente
        try {
            const { id } = req.params;
            const { nome, nomeSocial, genero,cpf, dataEmissaoCpf, telefones, rgs } = req.body;
            const cliente = await serviceCliente.editar(
                Number(id),
                nome,
                nomeSocial,
                genero,
                cpf,
                new Date(dataEmissaoCpf),
                telefones,
                rgs.map((rg: rgCliente) => ({ numero: rg.numero, dataEmissao: new Date(rg.dataEmissao) }))
            );

            res.status(200).json(cliente);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Produtos Consumidos
    public async produtosConsumidos(req: Request, res: Response) {
        // Método de Listar Produtos Consumidos
        try {
            const { id } = req.params;
            const produtosConsumidos = await serviceCliente.produtosConsumidos(Number(id));
            res.status(200).json(produtosConsumidos);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Serviços Consumidos
    public async servicosConsumidos(req: Request, res: Response) {
        // Método de Listar Serviços Consumidos
        try {
            const { id } = req.params;
            const servicosConsumidos = await serviceCliente.servicosConsumidos(Number(id));
            res.status(200).json(servicosConsumidos);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }
}
