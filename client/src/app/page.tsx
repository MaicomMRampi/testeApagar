"use client"
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messageTipo, setMessageTipo] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('https://teste.fluxodocapital.com.br/api/postusers', {
        nome,
        email,
        senha,
      });

      if (response.status === 200) {
        setMessageTipo('success');
        setMessage('Usuário criado com sucesso!');
      } else {
        setMessageTipo('error');
        setMessage('Erro ao criar o usuário.');
      }
    } catch (error) { // Use 'unknown' type for unexpected errors
      setMessageTipo('error');
      setMessage('Erro ao criar o usuário.');
      console.error('API Error:', error); // Optionally log the error for debugging
    }

    // Clear the message after 4 seconds
    setTimeout(() => {
      setMessage('');
      setMessageTipo('');
    }, 4000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Cadastro de Usuário</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border p-2 rounded w-80"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            className="border p-2 rounded w-80"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border p-2 rounded w-80"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Cadastrar
          </button>
        </form>

        {/* Exibe mensagens de sucesso ou erro */}
        {message && (
          <p className={`text-${messageTipo === 'success' ? 'green' : 'red'}-500`}>
            {message}
          </p>
        )}
      </main>
    </div>
  );
}