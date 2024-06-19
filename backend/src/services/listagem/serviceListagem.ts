import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ServiceListagem {
    // Listagem 10 clientes que mais consumiram em quantidade
    public async top10ClientesPorQuantidade() {
        const clientes = await prisma.usuario.findMany({
            include: {
                produtos: true,
                servicos: true,
            }
        });

        clientes.sort((a, b) => {
            const totalA = a.produtos.length + a.servicos.length;
            const totalB = b.produtos.length + b.servicos.length;
            return totalB - totalA;
        });

        const top10Clientes = clientes.slice(0, 10).map(cliente => {
            const total = cliente.produtos.length + cliente.servicos.length;
            return {
                nome: cliente.nome,
                quantidade: total
            };
        });

        return top10Clientes;
    }

    // Listagem de todos os clientes por gênero
    public async clientesPorGenero() {
        const clientesMasculinos = await prisma.usuario.findMany({
            where: {
                genero: 'masculino'
            },
            select: {
                id: true,
                nome: true,
                genero: true,
                // adicione outros campos necessários aqui
            }
        });

        const clientesFemininos = await prisma.usuario.findMany({
            where: {
                genero: 'feminino'
            },
            select: {
                id: true,
                nome: true,
                genero: true,
                // adicione outros campos necessários aqui
            }
        });

        return {
            masculino: clientesMasculinos,
            feminino: clientesFemininos
        };
    }

    // Listagem geral de produtos e serviços mais consumidos
    public async produtosEServicosMaisConsumidos() {
        const produtos = await prisma.produto.findMany({
            include: {
                _count: {
                    select: {
                        usuarios: true
                    }
                }
            },
            orderBy: {
                usuarios: {
                    _count: 'desc'
                }
            }
        });

        const servicos = await prisma.servico.findMany({
            include: {
                _count: {
                    select: {
                        usuarios: true
                    }
                }
            },
            orderBy: {
                usuarios: {
                    _count: 'desc'
                }
            }
        });

        return { produtos, servicos };
    }

    // Listagem 10 clientes que menos consumiram produtos ou serviços
    public async top10ClientesMenosConsumo() {
        const clientes = await prisma.usuario.findMany({
            include: {
                produtos: true,
                servicos: true,
            }
        });

        clientes.sort((a, b) => {
            const totalA = a.produtos.length + a.servicos.length;
            const totalB = b.produtos.length + b.servicos.length;
            return totalA - totalB;
        });

        const top10Clientes = clientes.slice(0, 10).map(cliente => {
            const total = cliente.produtos.length + cliente.servicos.length;
            return {
                nome: cliente.nome,
                quantidade: total
            };
        });

        return top10Clientes;
    }

    // Listagem 5 clientes mais consumiram em valor
    public async top5ClientesPorValor() {
        const clientes = await prisma.$queryRaw`
            SELECT u.nome, SUM(p.preco) AS totalGasto
            FROM Usuario u
            JOIN UsuarioProduto up ON u.id = up.usuarioId
            JOIN Produto p ON up.produtoId = p.id
            GROUP BY u.nome
            ORDER BY totalGasto DESC
            LIMIT 5
        `;

        return clientes;
    }

    // Listagem dos serviços e produtos mais consumidos por gênero
    public async consumoPorGenero() {
        const produtosPorGenero = await prisma.$queryRaw`
            SELECT u.genero, p.nome, COUNT(*) AS quantidade
            FROM Usuario u
            JOIN UsuarioProduto up ON u.id = up.usuarioId
            JOIN Produto p ON up.produtoId = p.id
            GROUP BY u.genero, p.nome
            ORDER BY quantidade DESC
        `;

        const servicosPorGenero = await prisma.$queryRaw`
            SELECT u.genero, s.nome, COUNT(*) AS quantidade
            FROM Usuario u
            JOIN UsuarioServico us ON u.id = us.usuarioId
            JOIN Servico s ON us.servicoId = s.id
            GROUP BY u.genero, s.nome
            ORDER BY quantidade DESC
        `;

        return { produtosPorGenero, servicosPorGenero };
    }
}