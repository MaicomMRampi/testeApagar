const mysql = require('mysql2');

// Carregar as variáveis de ambiente
const dotenv = require('dotenv');
dotenv.config();

// Criar conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
console.log("🚀 ~ db", db)

// Teste de conexão
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
        return;
    }
});

module.exports = db;
