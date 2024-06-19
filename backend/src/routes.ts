import { Router } from 'express';
import ControllerCliente from './controllers/cliente/controllerCliente';
import ControllerProduto from './controllers/produtos/controllerProduto';
import ControllerServico from './controllers/servicos/controllerServico';
import ControllerListagem from './controllers/listagem/controllerListagem'

const router = Router();
const controllerCliente = new ControllerCliente();
const controllerProduto = new ControllerProduto();
const controllerServico = new ControllerServico();
const controllerListagem = new ControllerListagem();

// #region Cliente
router.post('/cadastro', (req, res) => controllerCliente.cadastro(req, res));
router.get('/listar', (req, res) => controllerCliente.listar(req, res));
router.get('/buscar/:id', (req, res) => controllerCliente.buscar(req, res));
router.get('/produtos/consumidos/:id', (req, res) => controllerCliente.produtosConsumidos(req, res));
router.get('/servicos/consumidos/:id', (req, res) => controllerCliente.servicosConsumidos(req, res));
router.put('/editar/:id', (req, res) => controllerCliente.editar(req, res));
router.delete('/remover/cliente/:id', (req, res) => controllerCliente.remover(req, res));
// #endregion

// #region Produto
router.post('/cadastro/produto', (req, res) => controllerProduto.cadastro(req, res));
router.get('/listar/produto', (req, res) => controllerProduto.listar(req, res));
router.get('/buscar/produto/:id', (req, res) => controllerProduto.buscar(req, res));
router.put('/editar/produto/:id', (req, res) => controllerProduto.editar(req, res));
router.post('/consumir/produto/:id', (req, res) => controllerProduto.consumir(req, res));
router.delete('/remover/produto/:id', (req, res) => controllerProduto.remover(req, res));
// #endregion

// #region Servico
router.post('/cadastro/servico', (req, res) => controllerServico.cadastro(req, res));
router.get('/listar/servico', (req, res) => controllerServico.listar(req, res));
router.get('/buscar/servico/:id', (req, res) => controllerServico.buscar(req, res));
router.put('/editar/servico/:id', (req, res) => controllerServico.editar(req, res));
router.post('/consumir/servico/:id', (req, res) => controllerServico.consumir(req, res));
router.delete('/remover/servico/:id', (req, res) => controllerServico.remover(req, res));
// #endregion

// #region Listagem
router.get('/listar/top10ClientesPorQuantidade', (req, res) => controllerListagem.top10ClientesPorQuantidade(req, res));
router.get('/listar/clientesPorGenero', (req, res) => controllerListagem.clientesPorGenero(req, res));
router.get('/listar/produtosEServicosMaisConsumidos', (req, res) => controllerListagem.produtosEServicosMaisConsumidos(req, res));
router.get('/listar/top10ClientesMenosConsumo', (req, res) => controllerListagem.top10ClientesMenosConsumo(req, res));
router.get('/listar/top5ClientesPorValor', (req, res) => controllerListagem.top5ClientesPorValor(req, res));
router.get('/listar/consumidosPorGenero', (req, res) => controllerListagem.consumoPorGenero(req, res));

export default router;