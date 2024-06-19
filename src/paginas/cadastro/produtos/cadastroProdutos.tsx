import {Component} from 'react';
import { Button } from 'react-bootstrap';
import { ProdutoInterface } from '../../interface/produtoInterface';

export class CadastrarProdutos extends Component {
    constructor(props: ProdutoInterface) {
        super(props);
        this.state = {
            produtoNome: '',
            produtoPreco: ''
        };
    }
    render() {
    return (
        <section>
            <main>
                <h1>Cadastrar Produto</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="number" />
                        </div>
                        <div className="button-group" style={{ marginTop: '10px' }}>
                            <Button variant="dark" href='/'>Voltar</Button>
                            <Button variant="success" type='submit' style={{ marginLeft: '5px' }}>Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
        );
    }      
}