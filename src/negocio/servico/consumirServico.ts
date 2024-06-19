import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";  // Assumindo que há um modelo de Servico similar ao de Produto
import Cliente from "../../modelo/cliente";
import Consumo from "../consumo";

export default class ConsumirServico extends Consumo {
    private servicos: Array<Servico>
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public consumir(): void {
        console.log(`\nLista de todos os Serviços`);
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.nome}`);
        });
        console.log(`Caso queira consumir mais de um serviço, separe-os por vírgula. Exemplo: Indice1, Indice2, Indice3, ...`);
        let entrada = this.entrada.receberTexto(`Qual serviço deseja consumir? Selecione o Índice do Serviço:`);
        let servicosIndices = entrada.trim().split(',');

        let servicosSelecionados = servicosIndices.map(indice => {
            let idx = parseInt(indice.trim()) - 1;
            return this.servicos[idx];
        });

        console.log(`\nLista de todos os Clientes`);
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });
        let clienteIndice = this.entrada.receberNumero(`Qual cliente deseja consumir? Selecione o Índice do Cliente:`);
        let clienteSelecionado = this.clientes[clienteIndice - 1];

        servicosSelecionados.forEach(servico => {
            if (servico) {
                clienteSelecionado.getServicosConsumidos.push(servico);
                console.log(`Serviço ${servico.nome} adicionado ao cliente ${clienteSelecionado.nome}`);
            } else {
                console.log(`Índice de serviço inválido`);
            }
        });
        
        console.log(`\nServiços consumidos pelo cliente ${clienteSelecionado.nome}:`);
        clienteSelecionado.getServicosConsumidos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.nome} - R$ ${servico.preco}`);
        });
    }
}
