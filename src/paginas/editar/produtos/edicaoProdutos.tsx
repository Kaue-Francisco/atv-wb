import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ProdutoInterface } from '../../interface/produtoInterface';

export class EditarProduto extends Component {
    render(){
        return (
            <section>
                <main>
                    <h1>Editar Produto</h1>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Produto">Produto:</label>
                                <input type="text" defaultValue="Shampoo Hidratante"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Preco">Preço:</label>
                                <input type="number" defaultValue="12"/>
                            </div>
                            <div className='submit'>
                                <Button style={{marginRight: "10px"}} variant="dark" href='/produtos'>Voltar</Button>
                                <Button variant="success" type='submit'>Editar</Button>{' '}
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        )
    }
};