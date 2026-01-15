import { useState, useRef } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Tipagem explícita para ícones
const FaUserIcon = FaUser as React.ComponentType<{ className?: string; onClick?: () => void }>;
const FaLockIcon = FaLock as React.ComponentType<{ className?: string; onClick?: () => void }>;

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // Refs para focar nos inputs
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
    if (username && password) {
      navigate('/catalogo');
    } else {
      alert("Preencha e-mail e senha!");
    }
  };

  // Funções para os "links" (placeholders para funcionalidades futuras)
  const handleForgotPassword = () => {
    alert("Funcionalidade de recuperação de senha em desenvolvimento!");
    // Futuro: navigate('/recuperar-senha');
  };

  const handleRegister = () => {
    alert("Funcionalidade de registro em desenvolvimento!");
    // Futuro: navigate('/registrar');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md w-80">
        <h1 className="text-center mb-5 text-xl font-bold">Acesse o sistema</h1>
        <div className="relative mb-4">
          <input
            ref={usernameRef}
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <FaUserIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => usernameRef.current?.focus()}
          />
        </div>
        <div className="relative mb-4">
          <input
            ref={passwordRef}
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <FaLockIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => passwordRef.current?.focus()}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Lembre de mim
          </label>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Esqueceu sua senha?
          </button>
        </div>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700">
          Login
        </button>
        <div className="text-center mt-4">
          <p>
            Não tem uma conta?{" "}
            <button
              type="button"
              onClick={handleRegister}
              className="text-blue-500 underline hover:text-blue-700"
            >
              Registrar
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;