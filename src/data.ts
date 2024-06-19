const servicos = [
    { id: 1, nome: 'Corte de Cabelo', preco: 'R$50' },
    { id: 2, nome: 'Coloração de Cabelo', preco: 'R$80' },
    { id: 3, nome: 'Manicure', preco: 'R$35' },
];

const produtos = [
    { id: 1, nome: 'Shampoo Hidratante', preco: 'R$12' },
    { id: 2, nome: 'Sabonete Esfoliante', preco: 'R$10' },
    { id: 3, nome: 'Creme Hidratante Corporal', preco: 'R$15' },
];

const clientes = [
    { id: 2, nome: 'Joaquina Texeira', nomeSocial: 'Jojo Lindinha', genero: 'Feminino', rg: '987654321', dataRG: '10/10/2000', cpf: '987.654.321-00', telefone: '(11) 9876-5432', consumo: '30' },
    { id: 3, nome: 'Jorge Costa', nomeSocial: 'Jorjão', genero: 'Masculino', rg: '456789123', dataRG: '10/10/2000', cpf: '456.789.123-00', telefone: '(11) 4567-8912', consumo: '20'},
    { id: 1, nome: 'Ana Oliveira', nomeSocial: 'Aninha', genero: 'Feminino', rg: '123456789', dataRG: '10/10/2000', cpf: '123.456.789-00', telefone: '(11) 1234-5678', consumo: '10' },
];

export { servicos, produtos, clientes };