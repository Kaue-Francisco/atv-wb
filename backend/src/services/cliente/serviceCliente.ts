import { PrismaClient } from '@prisma/client';
import { rgCliente, telefoneCliente } from '../../interface/clienteInterface';
const prisma = new PrismaClient()

export default class ServiceCliente {
    // #region Cadastro Cliente
    public async cadastro(nome: string, nomeSocial: string, genero: string, cpf: string, dataEmissaoCpf: Date, telefones: telefoneCliente[], rgs: rgCliente[]) {
        // Realiza o Cadastro de Clientes
        const cliente = await prisma.usuario.create({
            data: {
                nome: nome,
                nomeSocial: nomeSocial,
                genero: genero,
                cpf: cpf,
                dataEmissaoCpf: dataEmissaoCpf,
                telefones: {
                    create: telefones.map(telefone => {
                        return {
                            numero: telefone.numero,
                        }
                    })
                },
                rgs: {
                    create: rgs.map(rg => {
                        return {
                            numero: rg.numero,
                            dataEmissao: rg.dataEmissao,
                        }
                    })
                },
            }
        });

        return cliente;
    }

    // #region Listar Clientes
    public async listar() {
        // Realiza a Listagem de Clientes
        const clientes = await prisma.usuario.findMany({
            include: {
                telefones: true,
                rgs: true,
            }
        });

        return clientes;
    }

    // #region Remover Cliente
    public async remover(id: number) {
        // Realiza a Remoção de Clientes
        try {
            // First, delete related records in other tables
            await prisma.telefone.deleteMany({
                where: {
                    usuarioId: id
                }
            });
            await prisma.rg.deleteMany({
                where: {
                    usuarioId: id
                }
            });
            await prisma.usuarioProduto.deleteMany({
                where: {
                    usuarioId: id
                }
            });
            await prisma.usuarioServico.deleteMany({
                where: {
                    usuarioId: id
                }
            });

            // Then, delete the usuario record
            await prisma.usuario.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Erro ao remover cliente:', error);
            throw error;
        }
    }

    // #region Buscar Cliente
    public async buscar(id: number) {
        // Realiza a Busca de Clientes
        const cliente = await prisma.usuario.findUnique({
            where: {
                id: id
            },
            include: {
                telefones: true,
                rgs: true,
            }
        });

        return cliente;
    }

    // #region Editar Cliente
    public async editar(id: number, nome: string, nomeSocial: string, genero: string, cpf: string, dataEmissaoCpf: Date, telefones: telefoneCliente[], rgs: rgCliente[]) {
        try {
            // Verifica se o cliente existe pelo cpf
            const clienteExistente = await prisma.usuario.findUnique({
                where: {
                    cpf: cpf
                }
            });

            if (clienteExistente && clienteExistente.id !== id) {
                throw new Error('Já existe um cliente cadastrado com esse CPF.');
            }

            // Realiza a Edição de Clientes
            const cliente = await prisma.usuario.update({
                where: { id },
                data: {
                    nome,
                    nomeSocial,
                    genero,
                    cpf,
                    dataEmissaoCpf,
                    telefones: {
                        deleteMany: {}, // Se você deseja excluir telefones antes de criar novos, especifique as condições de exclusão aqui
                        create: telefones.filter(telefone => telefone.numero).map(telefone => ({ numero: telefone.numero })) // Certifique-se de especificar o número para cada telefone
                    },
                    rgs: {
                        deleteMany: {}, // Se você deseja excluir RGs antes de criar novos, especifique as condições de exclusão aqui
                        create: rgs.map(rg => ({ numero: rg.numero, dataEmissao: rg.dataEmissao })) // Certifique-se de especificar o número e dataEmissao para cada RG
                    }
                }
            });

            return cliente;
        } catch (error) {
            console.error('Erro ao editar cliente:', error);
            throw error;
        }
    }

    // #region Produtos Consumidos
    public async produtosConsumidos(id: number) {
        // Fetch products consumed by the user
        const produtosConsumidos = await prisma.usuarioProduto.findMany({
            where: {
                usuarioId: id
            },
            include: {
                produto: true
            }
        });

        // Extract and return the product details
        return produtosConsumidos.map(up => up.produto);
    }

    // #region Serviços Consumidos
    public async servicosConsumidos(id: number) {
        // Fetch services consumed by the user
        const servicosConsumidos = await prisma.usuarioServico.findMany({
            where: {
                usuarioId: id
            },
            include: {
                servico: true
            }
        });

        // Extract and return the service details
        return servicosConsumidos.map(us => us.servico);
    }
}
