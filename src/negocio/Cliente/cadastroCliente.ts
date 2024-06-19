import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Cadastro from "../cadastro";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.produtos = produtos
        this.servicos = servicos
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        // Cadastro de nome e gênero do cliente
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o seu gênero (Masculino ou Feminino): `)

        // Cadastro de CPF do cliente
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        
        let qtdRg = this.entrada.receberNumero(`Por favor informe a quantidade de RGs que deseja cadastrar: `)
        for (let i = 0; i < qtdRg; i++) {
            this.cadastrarRg(cliente)
        }
        
        let qtdTelefone = this.entrada.receberNumero(`Por favor informe a quantidade de telefones que deseja cadastrar: `)
        for (let i = 0; i < qtdTelefone; i++) {
            this.cadastrarTelefone(cliente)
        }
        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    private cadastrarRg(cliente: Cliente) {
        let valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia);
        let rg = new RG(valor, dataEmissao);
        cliente.getRgs.push(rg);
    }

    private cadastrarTelefone(cliente: Cliente) {
        let telefoneCompleto = this.entrada.receberTexto(`Por favor informe o DDD de seu telefone no padrão DDD NUMERO: `);

        let ddd = telefoneCompleto.split(' ')[0];
        let numeroTelefone = telefoneCompleto.split(' ')[1];

        let telefone = new Telefone(ddd, numeroTelefone);
        cliente.getTelefones.push(telefone);
    }
}