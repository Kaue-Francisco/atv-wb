import { Request, Response } from 'express';
import ServiceProduto from '../../services/produto/serviceProduto';

const serviceProduto = new ServiceProduto();

export default class ControllerProduto {
    // #region Cadastro Produto
    public async cadastro(req: Request, res: Response) {
        // Método de Cadastrar Produto
        try {
            const { nome, preco } = req.body;

            const produto = await serviceProduto.cadastro(nome, preco);

            res.status(201).json(produto);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Listar Produtos
    public async listar(req: Request, res: Response) {
        // Método de Listar Produtos
        try {
            const produto = await serviceProduto.listar();

            res.status(200).json(produto);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Remover Produto
    public async remover(req: Request, res: Response) {
        // Método de Remover Produto
        try {
            const { id } = req.params;

            await serviceProduto.remover(Number(id));

            res.status(204).send();
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Buscar Produto
    public async buscar(req: Request, res: Response) {
        // Método de Buscar Produto
        try {
            const { id } = req.params;

            const produto = await serviceProduto.buscar(Number(id));

            res.status(200).json(produto);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Editar Produto
    public async editar(req: Request, res: Response) {
        // Método de Editar Produto
        try {
            const { id } = req.params;
            const { nome, preco } = req.body;
            const produto = await serviceProduto.editar(Number(id), nome, preco);

            res.status(200).json(produto);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }

    // #region Consumir Produto
    public async consumir(req: Request, res: Response) {
        // Método de Consumir Produto
        try {
            const { id } = req.params;
            const { produtos } = req.body;
            await serviceProduto.consumir(Number(id), produtos);

            res.status(200).send();
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message || 'Unknown error' });
        }
    }
}
