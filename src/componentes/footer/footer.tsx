import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
    <div style={{ backgroundColor: 'black', color: 'white', height: '80px', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Container>
            <p style={{ color: '#fff', fontWeight: 'bold', marginRight: '15px', textAlign: 'center' }}>Direitos Reservados © 2024 WB</p>
        </Container>
    </div>
);

export default Footer;
