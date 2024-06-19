import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nCadastre seu produto`);
        let produto = this.entrada.receberTexto(`Qual é o nome do produto: `)
        let nomes = this.produtos.map(i => (i.nome))
        if (nomes.includes(produto)) {
            console.log(`${produto} já existe dentro do sistema`);
            console.log();
        } else {
            let preco = this.entrada.receberTexto(`Qual é o preço do produto? R$`);
            let precoNumerico = parseFloat(preco.replace(',', '.'));
            let cadastrar = new Produto(produto, precoNumerico);
            this.produtos.push(cadastrar);
            console.log();
        }
    }
    public gerar(): void {
        let produtos = [
            "Shampoo",
            "Condicionador",
            "Máscara Capilar",
            "Óleo de Argan",
            "Creme para Pentear",
            "Spray Fixador",
            "Gel de Cabelo",
            "Escova de Cabelo",
            "Pente",
            "Secador de Cabelo",
            "Chapinha",
            "Modelador de Cachos",
            "Tinta de Cabelo",
            "Perfume",
            "Creme para Pele"
        ]
        let preco = [
            20.00,
            18.00,
            25.00,
            30.00,
            15.00,
            12.00,
            10.00,
            8.00,
            5.00,
            50.00,
            40.00,
            35.00,
            15.00,
            80.00,
            28.00
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}