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
import ConsumosClientes  from '../paginas/visualizar/consumos/consumos';
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
                <Route path='/clientes/1' element={<VisualizarCliente/>}/>
                <Route path='/produtos/1' element={<VisualizarProduto/>}/>
                <Route path='/servicos/1' element={<VisualizarServico/>}/>
                <Route path='/editar_cliente/1' element={<EditarCliente/>}/>
                <Route path='/editar_produto/1' element={<EditarProduto/>}/>
                <Route path='/editar_servico/1' element={<EditarServico/>}/>
                <Route path='/produtos-consumidos' element={<ProdutosConsumidos/>}/>
                <Route path='/servicos-consumidos' element={<ServicosConsumidos/>}/>
                <Route path='/consumir-produto' element={<ConsumirProduto/>}/>
                <Route path='/consumir-servico' element={<ConsumirServico/>}/>
                <Route path='/consumosClientes' element={<ConsumosClientes />}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;