import Listagem from "../listagem";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";

export default class ListagemProdutosConsumido extends Listagem {
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        console.log(`\nLista de todos os Clientes`);
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });
        let clienteIndice = this.entrada.receberNumero(`Selecione o Índice do Cliente para ver os produtos consumidos:`);
        let clienteSelecionado = this.clientes[clienteIndice - 1];

        console.log(`\nProdutos consumidos pelo cliente ${clienteSelecionado.nome}:`);
        let produtosConsumidos = clienteSelecionado.getProdutosConsumidos;
        if (produtosConsumidos.length > 0) {
            produtosConsumidos.forEach((produto, index) => {
                console.log(`${index + 1} - ${produto.nome} - R$ ${produto.preco}`);
            });
        } else {
            console.log(`O cliente ${clienteSelecionado.nome} não consumiu nenhum produto.`);
        }
    }
}