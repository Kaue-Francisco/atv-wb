import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import AtualizarCliente from "../negocio/Cliente/atualizarCliente";
import ExcluirCliente from "../negocio/Cliente/excluirCliente";
import ListagemProduto from "../negocio/produto/listagemProduto";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import ExcluirProduto from "../negocio/produto/excluirProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServico from "../negocio/servico/listagemServico";
import AtualizarServico from "../negocio/servico/atualizarServico";
import ExcluirServico from "../negocio/servico/excluirServico";
import listagemConsumoValor from "../negocio/listagem/ListagemConsumoValor";
import ListagemGenero from "../negocio/listagem/ListagemGenero";
import ListagemQuantidade from "../negocio/listagem/ListagemMaisConsumidor";
import ListagemMenosQuantidade from "../negocio/listagem/ListagemMenosConsumidor";
import ProdMaisConsumidos from "../negocio/listagem/ListagemProdServMaisConsumidos";
import ConsumidoGenero from "../negocio/listagem/ListagemProdServPorGenero";
import GeradorDeClientes from "../negocio/Cliente/gerar";
import ConsumirProduto from "../negocio/produto/consumirProduto";
import ListagemProdutosConsumido from "../negocio/Cliente/listarProdutosCliente";
import ConsumirServico from "../negocio/servico/consumirServico";
import ListagemServicosConsumido from "../negocio/Cliente/listarServicosCliente";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let cadastroServico = new CadastroServico(empresa.getServicos);
let gerarClientes = new GeradorDeClientes(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
cadastroServico.gerar();
cadastroProduto.gerar();
gerarClientes.gerar();

while (execucao) {
    console.log(`Opções:`);

    // Cliente
    console.log(`=====================`);
    console.log(`       CLIENTE       `);
    console.log(`=====================`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar Cliente`);
    console.log(`4 - Excluir Cliente`);
    console.log(`5 - Produtos Consumidos`);7
    console.log(`6 - Serviços Consumidos`);

    // Produto
    console.log(`\n=====================`);
    console.log(`       PRODUTO       `);
    console.log(`=====================`);
    console.log(`7 - Cadastrar Produto`);
    console.log(`8 - Consumir Produto`);
    console.log(`9 - Listar todos os produtos`);
    console.log(`10 - Atualizar Produto`);
    console.log(`11 - Excluir Produto`);

    // Serviço
    console.log(`\n=====================`);
    console.log(`       SERVIÇO       `);
    console.log(`=====================`);
    console.log(`12 - Cadastrar Serviço`);
    console.log(`13 - Consumir Serviço`);
    console.log(`14 - Listar todos os serviços`);
    console.log(`15 - Atualizar Serviço`);
    console.log(`16 - Excluir Serviço`);

    // Listagem
    console.log(`\n=====================`);
    console.log(`       LISTAGEM      `);
    console.log(`=====================`);
    console.log(`17 - Listagem dos 10 clientes que mais consumiram produtos ou serviços.`);
    console.log(`18 - Listagem de todos os clientes por gênero.`);
    console.log(`19 - Listagem geral dos serviços ou produtos mais consumidos.`);
    console.log(`20 - Listagem dos serviços ou produtos mais consumidos por gênero.`)
    console.log(`21 - Listagem dos 10 clientes que menos consumiram produtos ou serviços.`)
    console.log(`22 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.`)

    console.log(`\n0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar();
            break;
        case 3:
            let atualizarClientes = new AtualizarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            atualizarClientes.atualizar();
            break;
        case 4:
            let excluirCliente = new ExcluirCliente(empresa.getClientes)
            excluirCliente.excluir();
            break
        case 5:
            let listagemProdutosConsumido = new ListagemProdutosConsumido(empresa.getClientes, empresa.getProdutos)
            listagemProdutosConsumido.listar();
            break;
        case 6:
            let listagemServicosConsumidos = new ListagemServicosConsumido(empresa.getClientes, empresa.getProdutos)
            listagemServicosConsumidos.listar();
            break;
        case 7:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar();
            break;
        case 8:
            let consumirProduto = new ConsumirProduto(empresa.getClientes, empresa.getProdutos)
            consumirProduto.consumir();
            break;
        case 9:
            let listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar();
            break;
        case 10:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.atualizar();
            break;
        case 11:
            let excluirProduto = new ExcluirProduto(empresa.getProdutos)
            excluirProduto.excluir();
            break;
        case 12:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar();
            break;
        case 13:
            let consumirServico = new ConsumirServico(empresa.getClientes, empresa.getServicos)
            consumirServico.consumir();
            break;
        case 14:
            let listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar();
            break;
        case 15:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar();
            break;
        case 16:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.excluir();
            break;
        case 17:
            let listagemQuantidade = new ListagemQuantidade(empresa.getClientes)
            listagemQuantidade.listar();
            break;
        case 18:
            let listagemGenero = new ListagemGenero(empresa.getClientes)
            listagemGenero.listar();
            break;
        case 19:
            let listagemProdServ = new ProdMaisConsumidos(empresa.getClientes)
            listagemProdServ.listar();
            break;
        case 20:
            let listagemGeneroProdServ = new ConsumidoGenero(empresa.getClientes)
            listagemGeneroProdServ.listar();
            break;
        case 21:
            let listagemMenosQuantidade = new ListagemMenosQuantidade(empresa.getClientes)
            listagemMenosQuantidade.listar();
            break;
        case 22:
            let listagemConsumo = new listagemConsumoValor(empresa.getClientes)
            listagemConsumo.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}