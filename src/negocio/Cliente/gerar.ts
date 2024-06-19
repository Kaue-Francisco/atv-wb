import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Geracao from "../geracao"

export default class GeradorDeClientes extends Geracao {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public gerar(): void {
        let nome = "Erik Camara Yokota"
        let nomeSocial = "Toyota"
        let genero = "Masculino"
        let valor = "123.456.789-00";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-9"
        let rg = new RG(valor, date)
        let ddd = "12"
        let numero = "112345968"
        let telefone = new Telefone(ddd, numero)
        let produtos = [
            "Creme para Pele",
            "Shampoo",
            "Tinta de Cabelo"
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        let servico = [
            "Pintura de Cabelo",
            "Corte de Cabelo"]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Jose Eduardo Fernandes Pereira"
        nomeSocial = "Gordão"
        genero = "Masculino"
        valor = "123.456.789-01"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-0"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "112345969"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Gel de Cabelo",
            "Escova de Cabelo",
            "Pente",
            "Secador de Cabelo"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de Cabelo",
	        "Manicure",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Diogo Palharini"
        nomeSocial = "Branquela do chan"
        genero = "Feminino"
        valor = "123.456.789-02"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "112345967"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Máscara Capilar",                           
            "Óleo de Argan",                                         
            "Creme para Pentear",                     
            "Spray Fixador"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Manicure",
	        "Pintura de Cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Arthur Karnas da Rocha"
        nomeSocial = "Arthur Broxa"
        genero = "Masculino"
        valor = "123.456.789-03"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "112345966"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo",                                  
            "Condicionador",                           
            "Máscara Capilar",                           
            "Óleo de Argan",                                         
            "Creme para Pentear"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Pintura de Cabelo",
	        "Pedicure",
	        "Limpeza de Pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Juan Soares"
        nomeSocial = "Monobola"
        genero = "Masculino"
        valor = "123.456.789-04"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-3"
        rg = new RG(valor, date)
        ddd = "11"
        numero = "112345965"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo",                                                           
            "Óleo de Argan",                                         
            "Creme para Pentear",
            "Pente",
            "Secador de Cabelo",
            "Chapinha",
            "Modelador de Cachos"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Pedicure",
	        "Limpeza de Pele",
            "Corte de Cabelo",
	        "Manicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Bruna Marquezine"
        nomeSocial = "Ex do neymar"
        genero = "Feminino"
        valor = "123.456.789-06"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-4"
        rg = new RG(valor, date)
        ddd = "67"
        numero = "112345964"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo",
            "Modelador de Cachos",
            "Spray Fixador",
            "Gel de Cabelo",
            "Escova de Cabelo"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Neymar Santos Junior"
        nomeSocial = "Menino ney"
        genero = "Masculino"
        valor = "123.456.789-07"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-5"
        rg = new RG(valor, date)
        ddd = "45"
        numero = "112345963"
        telefone = new Telefone(ddd, numero)
        produtos = [
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
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Pedicure",
	        "Limpeza de Pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Elon Musk"
        nomeSocial = "Elinho"
        genero = "Masculino"
        valor = "579.133.690-00"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-6"
        rg = new RG(valor, date)
        ddd = "09"
        numero = "112345962"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo",
            "Modelador de Cachos",
            "Tinta de Cabelo",
            "Perfume",
            "Creme para Pele"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Corte de Cabelo",
	        "Manicure",
	        "Pintura de Cabelo",
	        "Pedicure",
	        "Limpeza de Pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Endrick"
        nomeSocial = "Palmeirassss"
        genero = "Masculino"
        valor = "123.456.789-08"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-7"
        rg = new RG(valor, date)
        ddd = "32"
        numero = "112345961"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Condicionador",
            "Secador de Cabelo",
            "Spray Fixador",
            "Gel de Cabelo",
            "Perfume"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Corte de Cabelo",
	        "Manicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Mucalol"
        nomeSocial = "Comédia"
        genero = "Masculino"
        valor = "123.456.789-09"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-8"
        rg = new RG(valor, date)
        ddd = "14"
        numero = "112345960"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Condicionador",
            "Spray Fixador",
            "Gel de Cabelo",
            "Escova de Cabelo",
            "Pente",
            "Secador de Cabelo"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Corte de Cabelo",
	        "Manicure",
            "Limpeza de Pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Alan Ferreira Pereira"
        nomeSocial = "Alanzoka"
        genero = "Masculino"
        valor = "123.456.789-10"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.679-9"
        rg = new RG(valor, date)
        ddd = "23"
        numero = "112345978"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Pente",
            "Secador de Cabelo",
            "Máscara Capilar",                           
            "Óleo de Argan",                                         
            "Creme para Pentear",                     
            "Spray Fixador",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure",
            "Limpeza de Pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Gaules"
        nomeSocial = "Gaules"
        genero = "Masculino"
        valor = "123.456.789-11"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.670-9"
        rg = new RG(valor, date)
        ddd = "71"
        numero = "112345988"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Pente",
            "Secador de Cabelo",
            "Máscara Capilar",                           
            "Óleo de Argan",                                         
            "Creme para Pentear",                     
            "Spray Fixador",
            "Modelador de Cachos",
            "Tinta de Cabelo",
            "Perfume",
            "Creme para Pele"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure",
            "Limpeza de Pele",
            "Pintura de Cabelo",
	        "Pedicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Jukes"
        nomeSocial = "Jukes brabao"
        genero = "Masculino"
        valor = "123.456.789-12"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.671-9"
        rg = new RG(valor, date)
        ddd = "98"
        numero = "112345998"
        telefone = new Telefone(ddd, numero)
        produtos = [                              
            "Creme para Pentear",                     
            "Spray Fixador",
            "Modelador de Cachos",
            "Tinta de Cabelo",
            "Perfume",
            "Creme para Pele",
            "Spray Fixador",
            "Gel de Cabelo"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure",
            "Limpeza de Pele",
	        "Pedicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
    }
}