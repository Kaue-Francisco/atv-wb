import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do serviço: ");
        let nomes = this.servicos.map(i => (i.nome))
        if (nomes.includes(nome)) {
            console.log(`${nome} já existe`);
            console.log();
        } else {
            let preco = this.entrada.receberTexto(`Qual é o preço do servico? R$`)
            let precoFloat = parseFloat(preco.replace(',', '.'));
            let cadastrar = new Servico(nome, precoFloat);
            this.servicos.push(cadastrar);
            console.log();
        }
    }
    public gerar(): void {
        let servicos = [
            "Corte de Cabelo",
            "Pintura de Cabelo",
            "Manicure",
            "Pedicure",
            "Limpeza de Pele"
        ]
        let preco = [
            50.00,
            80.0,
            30.00,
            35.00,
            60.00
        ]
        let sliceServico = servicos.slice();
        let sliceServicoPreco = preco.slice()
        for (let index = 0; index < sliceServico.length; index++) {
            let adicionarServico = new Servico(sliceServico[index], Number(sliceServicoPreco[index]))
            this.servicos.push(adicionarServico)
        }
    }
}