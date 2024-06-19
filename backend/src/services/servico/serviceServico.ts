import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default class ServiceServico {
    // #region Cadastro Servico
    public async cadastro(nome: string, preco: number) {
        try {
            // Verifica se o Servico ja existe
            const servicoExistente = await prisma.servico.findFirst({
                where: {
                    nome: nome
                }
            });

            if (servicoExistente) {
                throw new Error('Produto com mesmo nome já cadastrado');
            }
            // Realiza o Cadastro de Servicos
            const servicos = await prisma.servico.create({
                data: {
                    nome: nome,
                    preco: preco
                }
            });

            return servicos;
        } catch (error: Error | any) {
            throw error;
        }
    }

    // #region Listar Servicos
    public async listar() {
        // Realiza a Listagem de servicos
        const servicos = await prisma.servico.findMany();

        return servicos;
    }

    // #region Remover Produto
    public async remover(id: number) {
        // Realiza a Remoção de Produtos
        await prisma.servico.delete({
            where: {
                id: id
            }
        });
    }

    // #region Buscar Produto
    public async buscar(id: number) {
        // Realiza a Busca de Produtos
        const servico = await prisma.servico.findUnique({
            where: {
                id: id
            }
        });

        return servico;
    }

    // #region Editar Produto
    public async editar(id: number, nome: string, preco: number) {
        // Realiza a Edição de Produtos
        const servico = await prisma.servico.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                preco: preco
            }
        });

        return servico;
    }

    // #region Consumir Servico
    public async consumir(clienteId: number, servicos: number[]) {
        try {
            // Verificar se todos os serviços existem
            const servicosConsumidos = await prisma.servico.findMany({
                where: {
                    id: {
                        in: servicos
                    }
                }
            });
    
            // Registrar o consumo dos serviços pelo cliente
            const consumo = servicos.map(servicoId => ({
                usuarioId: clienteId,
                servicoId
            }));
    
            await prisma.usuarioServico.createMany({
                data: consumo
            });
    
            return servicosConsumidos;
        } catch (error: any) {
            throw new Error(error.message || 'Erro ao consumir serviços');
        }
    }
    
}
