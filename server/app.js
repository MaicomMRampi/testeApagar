const express = require('express');
const cors = require('cors');

const app = express();

// Configuração do middleware CORS
app.use(cors({
    origin: '*', // Permite apenas esta origem
    // se preferir, use '*' para permitir todas as origens:
    // origin: '*',
}));

app.use(express.json());

// Suas rotas
app.post('/api/postusers', (req, res) => {
    // Lógica para criar usuário
    res.json({ message: 'Usuário criado com sucesso!' });
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
