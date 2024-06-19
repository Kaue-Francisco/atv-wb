import { Request, Response } from 'express';
import ServiceServico from '../../services/servico/serviceServico';

const serviceServico = new ServiceServico();

export default class Controllerservico {
    // #region Cadastro servico
    public async cadastro(req: Request, res: Response) {
        // Método de Cadastrar servico
        try {
            const { nome, preco } = req.body;

            const servico = await serviceServico.cadastro(nome, preco);

            res.status(201).json(servico);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Listar servicos
    public async listar(req: Request, res: Response) {
        // Método de Listar servicos
        try {
            const servico = await serviceServico.listar();

            res.status(200).json(servico);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Remover servico
    public async remover(req: Request, res: Response) {
        // Método de Remover servico
        try {
            const { id } = req.params;

            await serviceServico.remover(Number(id));

            res.status(204).send();
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Buscar servico
    public async buscar(req: Request, res: Response) {
        // Método de Buscar servico
        try {
            const { id } = req.params;

            const servico = await serviceServico.buscar(Number(id));

            res.status(200).json(servico);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Editar servico
    public async editar(req: Request, res: Response) {
        // Método de Editar servico
        try {
            const { id } = req.params;
            const { nome, preco } = req.body;
            await serviceServico.editar(Number(id), nome, preco);

            res.status(204).send();
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Consumir servico
    public async consumir(req: Request, res: Response) {
        // Método de Consumir servico
        try {
            const { id } = req.params;
            const servicos = req.body.servicos;
            await serviceServico.consumir(Number(id), servicos);

            res.status(204).send();
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }
}
