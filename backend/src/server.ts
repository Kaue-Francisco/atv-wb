import express from 'express';
import cors from 'cors';
import router from './routes';
import { CriandoClientes, CriandoProdutos, CriandoServicos, ConsumindoProdutos } from './gerarDados';

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON
app.use(router);

CriandoProdutos();
CriandoClientes();
CriandoServicos();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
