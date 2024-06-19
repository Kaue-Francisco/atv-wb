import { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './style.css'; // Certifique-se de importar o arquivo CSS se necessário

export default class Navbar_ extends Component {
    render() {
        return (
            <>
                <Navbar bg="black" variant="dark" expand="lg" style={{ height: '10vh' }}>
                    <Container>
                        <Navbar.Brand href="/" className="brand-shadow">WB</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/" style={window.location.pathname === '/' ? { color: '#fff', fontWeight: 'bold' } : {}}>Inicio</Nav.Link>
                                <NavDropdown title="Visualizar" id="basic-nav-dropdown" style={window.location.pathname === '/clientes' || window.location.pathname === '/consumos' || window.location.pathname === '/produtos' || window.location.pathname === '/servicos' ? { color: '#fff', fontWeight: 'bold' } : {}}>
                                    <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                                    <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                                    <NavDropdown.Item href="/servicos">Serviços</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/consumos">Consumos</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Cadastrar" id="basic-nav-dropdown" style={window.location.pathname === '/cadastrar_cliente' || window.location.pathname === '/cadastrar_produto' || window.location.pathname === '/cadastrar_servico' ? { color: '#fff', fontWeight: 'bold' } : {}}>
                                    <NavDropdown.Item href="/cadastrar_cliente">Cliente</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_produto">Produto</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_servico">Serviço</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
