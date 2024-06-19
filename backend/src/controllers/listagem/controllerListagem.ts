import ServiceListagem from "../../services/listagem/serviceListagem"; 
import { Request, Response } from "express";

const serviceListagem = new ServiceListagem();

export default class ListagemController {

    public async top10ClientesPorQuantidade(req: Request, res: Response) {
        try{
            const clientes = await serviceListagem.top10ClientesPorQuantidade();
            res.status(200).json(clientes);
        } catch (error: Error | any) {
            console.log(error);
        }
    }

    public async clientesPorGenero(req: Request, res: Response) {
        try{
            const clientes = await serviceListagem.clientesPorGenero();
            res.status(200).json(clientes);
        } catch (error: Error | any) {
            console.log(error);
        }
    }

    public async produtosEServicosMaisConsumidos(req: Request, res: Response) {
        try{
            const dados = await serviceListagem.produtosEServicosMaisConsumidos();
            res.status(200).json(dados);
        } catch (error: Error | any) {
            console.log(error);
        }
    }

    public async top10ClientesMenosConsumo(req: Request, res: Response) {
        try{
            const clientes = await serviceListagem.top10ClientesMenosConsumo();
            res.status(200).json(clientes);
        } catch (error: Error | any) {
            console.log(error);
        }
    }

    public async top5ClientesPorValor(req: Request, res: Response) {
        try{
            const clientes = await serviceListagem.top5ClientesPorValor();
            res.status(200).json(clientes);
        } catch (error: Error | any) {
            console.log(error);
        }
    }

    public async consumoPorGenero(req: Request, res: Response) {
        try{
            const dados = await serviceListagem.consumoPorGenero();
            const dadosWithBigIntHandled = JSON.parse(JSON.stringify(dados, (_, v) => typeof v === 'bigint' ? v.toString() : v));
            res.status(200).json(dadosWithBigIntHandled);
        } catch (error: Error | any) {
            console.log(error);
        }
    }
}