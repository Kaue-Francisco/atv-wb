import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default class ServiceProduto {
    // #region Cadastro Produto
    public async cadastro(nome: string, preco: number) {
        try {
            // Verifica se o Produto ja existe
            const produtoExistente = await prisma.produto.findFirst({
                where: {
                    nome: nome
                }
            });

            if (produtoExistente) {
                throw new Error('Produto com mesmo nome já cadastrado');
            }
            // Realiza o Cadastro de Produtos
            const produto = await prisma.produto.create({
                data: {
                    nome: nome,
                    preco: preco
                }
            });

            return produto;
        } catch (error: Error | any) {
            throw error;
        }
    }

    // #region Listar Produtos
    public async listar() {
        // Realiza a Listagem de Produtos
        const produtos = await prisma.produto.findMany();

        return produtos;
    }

    // #region Remover Produto
    public async remover(id: number) {
        // Realiza a Remoção de Produtos
        await prisma.produto.delete({
            where: {
                id: id
            }
        });
    }

    // #region Buscar Produto
    public async buscar(id: number) {
        // Realiza a Busca de Produtos
        const produto = await prisma.produto.findUnique({
            where: {
                id: id
            }
        });

        return produto;
    }

    // #region Editar Produto
    public async editar(id: number, nome: string, preco: number) {
        // Realiza a Edição de Produtos
        try {
            await prisma.produto.update({
                where: {
                    id: id
                },
                data: {
                    nome: nome,
                    preco: preco
                }
            });
        } catch (error: Error | any) {
            throw error;
        }
    }

    // #region Consumir Produto
    public async consumir(clienteId: number, produtos: number[]) {
        try {
            // Verificar se todos os produtos existem
            const produtosConsumidos = await prisma.produto.findMany({
                where: {
                    id: {
                        in: produtos
                    }
                }
            });
    
            // Registrar o consumo dos produtos pelo cliente
            const consumo = produtos.map(produtoId => ({
                usuarioId: clienteId,
                produtoId
            }));
    
            await prisma.usuarioProduto.createMany({
                data: consumo
            });
    
            return produtosConsumidos;
        } catch (error: any) {
            throw new Error(error.message || 'Erro ao consumir produtos');
        }
    }
}
