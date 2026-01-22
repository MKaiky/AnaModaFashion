/**
 * Contexto responsável por gerenciar o carrinho de compras
 * da aplicação.
 */

import React, { createContext, useContext, useState, ReactNode } from "react";

/**
 * Estrutura de um produto
 */
export interface Produto {
  id: number;
  title: string;
  desc?: string;
  price: number;
  img: string;
  category?: string;
  quantity?: number;
}

/**
 * Estrutura do contexto do carrinho
 */
interface ContextoCarrinhoProps {
  cart: Produto[];
  addToCart: (produto: Produto) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantidade: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<ContextoCarrinhoProps | undefined>(undefined);

/**
 * Provedor global do carrinho de compras
 */
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [itensCarrinho, setItensCarrinho] = useState<Produto[]>([]);

  /**
   * Adiciona um produto ao carrinho
   */
  const adicionarAoCarrinho = (produto: Produto) => {
    setItensCarrinho((itensAnteriores) => {
      const produtoExistente = itensAnteriores.find(
        (item) => item.id === produto.id
      );

      if (produtoExistente) {
        return itensAnteriores.map((item) =>
          item.id === produto.id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        );
      }

      return [...itensAnteriores, { ...produto, quantity: 1 }];
    });
  };

  /**
   * Remove um produto do carrinho
   */
  const removerDoCarrinho = (id: number) => {
    setItensCarrinho((itens) => itens.filter((item) => item.id !== id));
  };

  /**
   * Atualiza a quantidade de um produto
   */
  const atualizarQuantidade = (id: number, quantidade: number) => {
    setItensCarrinho((itens) =>
      itens.map((item) =>
        item.id === id ? { ...item, quantity: quantidade } : item
      )
    );
  };

  /**
   * Limpa completamente o carrinho
   */
  const limparCarrinho = () => {
    setItensCarrinho([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: itensCarrinho,
        addToCart: adicionarAoCarrinho,
        removeFromCart: removerDoCarrinho,
        updateQuantity: atualizarQuantidade,
        clearCart: limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/**
 * Hook para acessar o carrinho
 */
export const useCart = () => {
  const contexto = useContext(CartContext);

  if (!contexto) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }

  return contexto;
};
