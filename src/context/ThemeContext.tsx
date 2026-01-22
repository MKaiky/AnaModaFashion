/**
 * Contexto responsável por gerenciar o tema da aplicação
 * (modo claro e modo escuro).
 */

import { createContext, useContext, useState, ReactNode } from "react";

/**
 * Tipos de tema disponíveis
 */
type Tema = "light" | "dark";

/**
 * Estrutura do contexto de tema
 */
interface ContextoTemaProps {
  theme: Tema;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ContextoTemaProps | null>(null);

/**
 * Provedor do tema global da aplicação
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [temaAtual, setTemaAtual] = useState<Tema>("light");

  /**
   * Alterna entre modo claro e escuro
   */
  const alternarTema = () => {
    setTemaAtual((temaAnterior) =>
      temaAnterior === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme: temaAtual, toggleTheme: alternarTema }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook para acessar o contexto de tema
 */
export const useTheme = () => {
  const contexto = useContext(ThemeContext);

  if (!contexto) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return contexto;
};
