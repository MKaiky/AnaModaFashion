/**
 * Página de Login
 *
 * Responsável por:
 * - Capturar e validar credenciais do usuário
 * - Simular autenticação
 * - Redirecionar para o catálogo
 * - Preparar estrutura para futuras funcionalidades
 */

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

/**
 * Tipagem explícita dos ícones
 * Evita conflitos de tipagem no React + TypeScript
 */
const IconeUsuario =
  FaUser as React.ComponentType<{ className?: string; onClick?: () => void }>;

const IconeSenha =
  FaLock as React.ComponentType<{ className?: string; onClick?: () => void }>;

/**
 * Componente Login
 */
const Login: React.FC = () => {
  /** Estado do e-mail do usuário */
  const [email, setEmail] = useState<string>("");

  /** Estado da senha do usuário */
  const [senha, setSenha] = useState<string>("");

  /** Navegação entre páginas */
  const navigate = useNavigate();

  /** Referência para o input de e-mail */
  const emailRef = useRef<HTMLInputElement>(null);

  /** Referência para o input de senha */
  const senhaRef = useRef<HTMLInputElement>(null);

  /**
   * Manipula o envio do formulário
   * @param event Evento de submit do formulário
   */
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    console.log("Dados de Login:", { email, senha });

    if (email && senha) {
      navigate("/catalogo");
    } else {
      alert("Preencha e-mail e senha!");
    }
  };

  /**
   * Ação para recuperação de senha
   * (Funcionalidade futura)
   */
  const handleForgotPassword = (): void => {
    alert(
      "Funcionalidade de recuperação de senha em desenvolvimento!"
    );
  };

  /**
   * Ação para registro de novo usuário
   * (Funcionalidade futura)
   */
  const handleRegister = (): void => {
    alert("Funcionalidade de registro em desenvolvimento!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-lg shadow-md w-80"
      >
        <h1 className="text-center mb-5 text-xl font-bold">
          Acesse o sistema
        </h1>

        {/* ===== E-MAIL ===== */}
        <div className="relative mb-4">
          <input
            ref={emailRef}
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />

          <IconeUsuario
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => emailRef.current?.focus()}
          />
        </div>

        {/* ===== SENHA ===== */}
        <div className="relative mb-4">
          <input
            ref={senhaRef}
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />

          <IconeSenha
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => senhaRef.current?.focus()}
          />
        </div>

        {/* ===== OPÇÕES ===== */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
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

        {/* ===== BOTÃO LOGIN ===== */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* ===== REGISTRO ===== */}
        <div className="text-center mt-4 text-sm">
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
