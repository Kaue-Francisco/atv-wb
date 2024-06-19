
import { api } from '../../frontend/src/utils/api';

const clientes = [
    {
        nome: "Maria Silva",
        nomeSocial: "Maria S.",
        genero: "Feminino",
        cpf: "123.456.789-00",
        dataEmissaoCpf: "2010-06-15",
        telefones: [{ numero: "11 99999-9999" }],
        rgs: [{ numero: "12.345.678-9", dataEmissao: "2008-05-20" }]
    },
    {
        nome: "João Souza",
        nomeSocial: "João S.",
        genero: "Masculino",
        cpf: "987.654.321-00",
        dataEmissaoCpf: "2012-04-10",
        telefones: [{ numero: "21 98888-8888" }],
        rgs: [{ numero: "98.765.432-1", dataEmissao: "2010-02-14" }]
    },
    {
        nome: "Ana Costa",
        nomeSocial: "Ana C.",
        genero: "Feminino",
        cpf: "111.222.333-44",
        dataEmissaoCpf: "2015-09-25",
        telefones: [{ numero: "31 97777-7777" }],
        rgs: [{ numero: "11.223.344-5", dataEmissao: "2013-07-30" }]
    },
    {
        nome: "Carlos Pereira",
        nomeSocial: "Carlos P.",
        genero: "Masculino",
        cpf: "444.555.666-77",
        dataEmissaoCpf: "2018-11-05",
        telefones: [{ numero: "41 96666-6666" }],
        rgs: [{ numero: "22.334.455-6", dataEmissao: "2016-03-22" }]
    },
    {
        nome: "Beatriz Oliveira",
        nomeSocial: "Bia O.",
        genero: "Feminino",
        cpf: "888.999.000-11",
        dataEmissaoCpf: "2020-01-18",
        telefones: [{ numero: "51 95555-5555" }],
        rgs: [{ numero: "33.445.566-7", dataEmissao: "2019-08-19" }]
    },
    {
        nome: "Lucas Mendes",
        nomeSocial: "Lucas M.",
        genero: "Masculino",
        cpf: "222.333.444-55",
        dataEmissaoCpf: "2011-05-14",
        telefones: [{ numero: "61 94444-4444" }],
        rgs: [{ numero: "44.556.677-8", dataEmissao: "2009-12-25" }]
    },
    {
        nome: "Mariana Lima",
        nomeSocial: "Mari L.",
        genero: "Feminino",
        cpf: "666.777.888-99",
        dataEmissaoCpf: "2017-02-07",
        telefones: [{ numero: "71 93333-3333" }],
        rgs: [{ numero: "55.667.788-9", dataEmissao: "2015-11-11" }]
    },
    {
        nome: "Paulo Alves",
        nomeSocial: "Paulo A.",
        genero: "Masculino",
        cpf: "111.222.333-66",
        dataEmissaoCpf: "2014-08-23",
        telefones: [{ numero: "81 92222-2222" }],
        rgs: [{ numero: "66.778.899-0", dataEmissao: "2012-04-09" }]
    },
    {
        nome: "Juliana Rocha",
        nomeSocial: "Ju R.",
        genero: "Feminino",
        cpf: "444.555.666-11",
        dataEmissaoCpf: "2019-12-17",
        telefones: [{ numero: "91 91111-1111" }],
        rgs: [{ numero: "77.889.900-1", dataEmissao: "2017-06-21" }]
    },
    {
        nome: "Fernando Santos",
        nomeSocial: "Fernando S.",
        genero: "Masculino",
        cpf: "333.444.555-22",
        dataEmissaoCpf: "2016-10-12",
        telefones: [{ numero: "11 90000-0000" }],
        rgs: [{ numero: "88.990.111-2", dataEmissao: "2014-01-03" }]
    }
  ];
  
  const produtos = [
    { nome: "Produto 1", preco: 10.0 },
    { nome: "Produto 2", preco: 20.0 },
    { nome: "Produto 3", preco: 30.0 },
    { nome: "Produto 4", preco: 40.0 },
    { nome: "Produto 5", preco: 50.0 },
    { nome: "Produto 6", preco: 60.0 },
    { nome: "Produto 7", preco: 70.0 },
    { nome: "Produto 8", preco: 80.0 },
    { nome: "Produto 9", preco: 90.0 },
    { nome: "Produto 10", preco: 100.0 }
  ];
  
  const servicos = [
    { nome: "Serviço 1", preco: 10.0 },
    { nome: "Serviço 2", preco: 20.0 },
    { nome: "Serviço 3", preco: 30.0 },
    { nome: "Serviço 4", preco: 40.0 },
    { nome: "Serviço 5", preco: 50.0 },
    { nome: "Serviço 6", preco: 60.0 },
    { nome: "Serviço 7", preco: 70.0 },
    { nome: "Serviço 8", preco: 80.0 },
    { nome: "Serviço 9", preco: 90.0 },
    { nome: "Serviço 10", preco: 100.0 }
  ];
  
  const consumoProduto = [
    { clienteId: 1, produtoId: 1 },
    { clienteId: 1, produtoId: 2 },
    { clienteId: 1, produtoId: 3 },
    { clienteId: 2, produtoId: 4 },
    { clienteId: 2, produtoId: 5 },
    { clienteId: 2, produtoId: 6 },
    { clienteId: 3, produtoId: 7 },
    { clienteId: 3, produtoId: 8 },
    { clienteId: 3, produtoId: 9 },
    { clienteId: 4, produtoId: 10 },
    { clienteId: 4, produtoId: 1 },
    { clienteId: 4, produtoId: 2 },
    { clienteId: 5, produtoId: 3 },
    { clienteId: 5, produtoId: 4 },
    { clienteId: 5, produtoId: 5 },
    { clienteId: 6, produtoId: 6 },
    { clienteId: 6, produtoId: 7 },
  ]

  const consumoServico = [
    { clienteId: 1, servicoId: 1 },
    { clienteId: 1, servicoId: 2 },
    { clienteId: 1, servicoId: 3 },
    { clienteId: 2, servicoId: 4 },
    { clienteId: 2, servicoId: 5 },
    { clienteId: 2, servicoId: 6 },
    { clienteId: 3, servicoId: 7 },
    { clienteId: 3, servicoId: 8 },
    { clienteId: 3, servicoId: 9 },
    { clienteId: 4, servicoId: 10 },
    { clienteId: 4, servicoId: 1 },
    { clienteId: 4, servicoId: 2 },
    { clienteId: 5, servicoId: 3 },
    { clienteId: 5, servicoId: 4 },
    { clienteId: 5, servicoId: 5 },
    { clienteId: 6, servicoId: 6 },
    { clienteId: 6, servicoId: 7 },
  ]

  
export const CriandoClientes = async () => {
  let termo = true
    for (const cliente of clientes) {
      try {
        await api.post('/cadastro/', cliente);
      }
      catch (error) {
        termo = false
      }
    }
    if(termo){
      await ConsumindoProdutos();
      await ConsumindoServicos();
  }
}
  
export const CriandoProdutos = async () => {
    for (const produto of produtos) {
      try {
        await api.post('/cadastro/produto', produto);
      }
      catch (error) {}
    }
  }
  
export const CriandoServicos = async () => {
    for (const servico of servicos) {
      try {
        await api.post('/cadastro/servico', servico);
      }
      catch (error) {}
    }
  }

export const ConsumindoProdutos = async () => {
    for (const consumo of consumoProduto) {
      try {
        await api.post(`/consumir/produto/${consumo.clienteId}`, { produtos: [consumo.produtoId]});
      }
      catch (error) {
      }
    }
  }

export const ConsumindoServicos = async () => {
    for (const consumo of consumoServico) {
      try {
        await api.post(`/consumir/servico/${consumo.clienteId}`, { servicos: [consumo.servicoId]});
      }
      catch (error) {
      }
    }
  }