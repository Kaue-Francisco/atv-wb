import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor} Data de emissão: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}`);
            console.log(`Gênero: ` + cliente.getGenero);


            cliente.getRgs.map((RG)=>{
                console.log(`RG: ${RG.getValor} Data de emissão: ${RG.getDataEmissao.toLocaleDateString()}`);
            })

            cliente.getTelefones.map((Telefone)=> {
                console.log(`Telefone: ${Telefone.getDdd} ${Telefone.getNumero}`)
            })

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}