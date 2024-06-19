import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Consumo from "../consumo";

export default class ConsumirProduto extends Consumo {
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public consumir(): void {
        console.log(`\nLista de todos os Produtos`);
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.nome}`);
        });
        console.log(`Caso queira consumir mais de um produto, separe-os por vírgula. Exemplo: Indice1, Indice2, Indice3, ...`);
        let entrada = this.entrada.receberTexto(`Qual produto deseja consumir? Selecione o Índice do Produto:`);
        let produtosIndices = entrada.trim().split(',');

        let produtosSelecionados = produtosIndices.map(indice => {
            let idx = parseInt(indice.trim()) - 1;
            return this.produtos[idx];
        });

        console.log(`\nLista de todos os Clientes`);
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });
        let clienteIndice = this.entrada.receberNumero(`Qual cliente deseja consumir? Selecione o Índice do Cliente:`);
        let clienteSelecionado = this.clientes[clienteIndice - 1];

        produtosSelecionados.forEach(produto => {
            if (produto) {
                clienteSelecionado.getProdutosConsumidos.push(produto);
                console.log(`Produto ${produto.nome} adicionado ao cliente ${clienteSelecionado.nome}`);
            } else {
                console.log(`Índice de produto inválido`);
            }
        });
        
        console.log(`\nProdutos consumidos pelo cliente ${clienteSelecionado.nome}:`);
        clienteSelecionado.getProdutosConsumidos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.nome} - R$ ${produto.preco}`);
        });
    }
}
