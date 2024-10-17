require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importando o CORS
const userRoutes = require('./routes/userRoutes');

const app = express();

// Habilitando o CORS para todas as origens
app.use(cors()); // Permite todas as origens

app.use(express.json()); // Para parsear JSON
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
