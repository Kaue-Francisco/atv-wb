import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import Home  from '../paginas/home/Home';
import Clientes  from '../paginas/listagem/clientes/listagemClientes';
import Produtos  from '../paginas/listagem/produtos/listagemProdutos';
import Servicos  from '../paginas/listagem/servicos/listagemServicos';
import Consumos  from '../paginas/consumos/consumos';
import CadastrarClientes  from '../paginas/cadastro/clientes/cadastroClientes';
import CadastrarProdutos  from '../paginas/cadastro/produtos/cadastroProdutos';
import CadastrarServico  from '../paginas/cadastro/servicos/cadastroServicos';
import VisualizarCliente  from '../paginas/visualizar/clientes/visualizarClientes';
import VisualizarProduto  from '../paginas/visualizar/produtos/visualizarProtudos';
import VisualizarServico  from '../paginas/visualizar/servicos/visualizarServicos';
import EditarCliente  from '../paginas/editar/clientes/edicaoClientes';
import EditarProduto  from '../paginas/editar/produtos/edicaoProdutos';
import EditarServico  from '../paginas/editar/servicos/edicaoServicos';
import ProdutosConsumidos  from '../paginas/visualizar/produtosConsumidos/produtosConsumidos';
import ServicosConsumidos  from '../paginas/visualizar/servicosConsumidos/servicosConsumidos';
import ClientesPorQuantidade  from '../paginas/visualizar/consumos/top10ClientesPorQuantidade';
import ClientesPorGenero from '../paginas/visualizar/consumos/clientesPorGenero';
import ProdutosEServicos from '../paginas/visualizar/consumos/produtosEServicos';
import ClientesPorMenosQuantidade from '../paginas/visualizar/consumos/top10ClientesMenosConsumiram';
import CincoClientesPorValor from '../paginas/visualizar/consumos/5clientesMaisConsumiram';
import ConsumidosPorGenero from '../paginas/visualizar/consumos/ConsumidosPorGenero';
import ConsumirProduto  from '../paginas/consumos/consumirProduto';
import ConsumirServico  from '../paginas/consumos/consumirServico';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/consumos' element={<Consumos/>}/>
                <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                <Route path='/cadastrar_produto' element={<CadastrarProdutos/>}/>
                <Route path='/cadastrar_servico' element={<CadastrarServico/>}/>
                <Route path='/clientes/:id' element={<VisualizarCliente/>}/>
                <Route path='/produtos/:id' element={<VisualizarProduto/>}/>
                <Route path='/servicos/:id' element={<VisualizarServico/>}/>
                <Route path='/editar_cliente/:id' element={<EditarCliente/>}/>
                <Route path='/editar_produto/:id' element={<EditarProduto/>}/>
                <Route path='/editar_servico/:id' element={<EditarServico/>}/>
                <Route path='/produtos-consumidos/:id' element={<ProdutosConsumidos/>}/>
                <Route path='/servicos-consumidos/:id' element={<ServicosConsumidos/>}/>
                <Route path='/consumir-produto/:id' element={<ConsumirProduto/>}/>
                <Route path='/consumir-servico/:id' element={<ConsumirServico/>}/>
                <Route path='/clientes-por-quantidade' element={<ClientesPorQuantidade/>}/>
                <Route path='/clientes-por-genero' element={<ClientesPorGenero/>}/>
                <Route path='/produtos-servicos-mais-consumidos' element={<ProdutosEServicos/>}/>
                <Route path='/clientes-por-menos-consumo' element={<ClientesPorMenosQuantidade/>}/>
                <Route path='/clientes-por-valor' element={<CincoClientesPorValor/>}/>
                <Route path='/produtos-servicos-mais-consumidos-genero' element={<ConsumidosPorGenero/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;