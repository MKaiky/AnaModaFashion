import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (senha === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Senha incorreta");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-80">
        <h1 className="text-xl mb-4 text-center">Área Admin</h1>

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-sky-custom text-white py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
