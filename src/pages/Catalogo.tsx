/**
 * Página Catálogo
 *
 * Responsável por:
 * - Exibir a lista completa de produtos
 * - Permitir busca por nome
 * - Filtrar produtos por categoria
 * - Exibir detalhes do produto em modal
 * - Adicionar produtos ao carrinho
 */

import React, { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

// Imagens dos produtos
import imagem1 from "../assets/images/imagem1.png";
import imagem2 from "../assets/images/imagem2.png";
import imagem3 from "../assets/images/imagem3.png";
import imagem4 from "../assets/images/imagem4.png";
import imagem5 from "../assets/images/imagem5.png";
import imagem6 from "../assets/images/imagem6.png";
import imagem7 from "../assets/images/imagem7.png";
import imagem8 from "../assets/images/imagem8.png";
import imagem9 from "../assets/images/imagem9.png";
import imagem10 from "../assets/images/imagem10.png";
import imagem11 from "../assets/images/imagem11.png";
import imagem12 from "../assets/images/imagem12.png";

/**
 * Tipagem de um produto do catálogo
 */
export type Produto = {
  /** Identificador único */
  id: number;

  /** Nome do produto */
  titulo: string;

  /** Descrição detalhada */
  descricao: string;

  /** Preço do produto */
  preco: number;

  /** Imagem do produto */
  imagem: string;

  /** Categoria (anel, colar, pulseira, brinco) */
  categoria: string;
};

/**
 * Lista fixa de produtos do catálogo
 * (Simula um banco de dados)
 */
const listaProdutos: Produto[] = [
  {
    id: 1,
    titulo: "Anel Prata 925 Minimal",
    descricao: "Anel delicado em prata 925 com acabamento polido.",
    preco: 129.9,
    imagem: imagem1,
    categoria: "aneis",
  },
  {
    id: 2,
    titulo: "Anel Prata Texturizado",
    descricao: "Design moderno com textura artesanal.",
    preco: 149.9,
    imagem: imagem2,
    categoria: "aneis",
  },
  {
    id: 3,
    titulo: "Colar Coração Prata",
    descricao: "Colar em prata 925 com pingente de coração.",
    preco: 189.9,
    imagem: imagem3,
    categoria: "colares",
  },
  {
    id: 4,
    titulo: "Colar Lua Prata",
    descricao: "Colar místico inspirado na lua.",
    preco: 199.9,
    imagem: imagem4,
    categoria: "colares",
  },
  {
    id: 5,
    titulo: "Pulseira Elo Fino",
    descricao: "Pulseira feminina em prata 925.",
    preco: 159.9,
    imagem: imagem5,
    categoria: "pulseiras",
  },
  {
    id: 6,
    titulo: "Pulseira Prata Grossa",
    descricao: "Pulseira robusta e elegante.",
    preco: 179.9,
    imagem: imagem6,
    categoria: "pulseiras",
  },
  {
    id: 7,
    titulo: "Brinco Argola Prata",
    descricao: "Argola clássica em prata 925.",
    preco: 99.9,
    imagem: imagem7,
    categoria: "brincos",
  },
  {
    id: 8,
    titulo: "Brinco Pequeno Prata",
    descricao: "Brinco delicado para o dia a dia.",
    preco: 89.9,
    imagem: imagem8,
    categoria: "brincos",
  },
  {
    id: 9,
    titulo: "Anel Ajustável Prata",
    descricao: "Anel versátil com ajuste confortável.",
    preco: 139.9,
    imagem: imagem9,
    categoria: "aneis",
  },
  {
    id: 10,
    titulo: "Colar Medalha Prata",
    descricao: "Colar com medalha simbólica.",
    preco: 209.9,
    imagem: imagem10,
    categoria: "colares",
  },
  {
    id: 11,
    titulo: "Pulseira Trançada",
    descricao: "Pulseira com design trançado artesanal.",
    preco: 169.9,
    imagem: imagem11,
    categoria: "pulseiras",
  },
  {
    id: 12,
    titulo: "Brinco Orgânico Prata",
    descricao: "Formato orgânico inspirado na natureza.",
    preco: 119.9,
    imagem: imagem12,
    categoria: "brincos",
  },
];

/**
 * Componente Catálogo
 */
const Catalogo: React.FC = () => {
  /** Função para adicionar produto ao carrinho */
  const { addToCart } = useCart();

  /** Texto digitado na busca */
  const [busca, setBusca] = useState<string>("");

  /** Categoria selecionada no filtro */
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("");

  /** Produto atualmente exibido no modal */
  const [produtoModal, setProdutoModal] =
    useState<Produto | null>(null);

  /**
   * Lista de produtos filtrada
   * - Filtra pelo nome
   * - Filtra pela categoria
   */
  const produtosFiltrados = useMemo(() => {
    return listaProdutos.filter((produto) => {
      const correspondeBusca = produto.titulo
        .toLowerCase()
        .includes(busca.toLowerCase());

      const correspondeCategoria = categoriaSelecionada
        ? produto.categoria === categoriaSelecionada
        : true;

      return correspondeBusca && correspondeCategoria;
    });
  }, [busca, categoriaSelecionada]);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6">
        Catálogo Yabás Pratas
      </h1>

      {/* ===== FILTROS ===== */}
      <div className="flex flex-col md:flex-row gap-3 mb-10">
        <input
          placeholder="Buscar joia..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="rounded-lg border px-4 py-2"
        />

        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="rounded-lg border px-4 py-2"
        >
          <option value="">Todas as categorias</option>
          <option value="aneis">Anéis</option>
          <option value="colares">Colares</option>
          <option value="pulseiras">Pulseiras</option>
          <option value="brincos">Brincos</option>
        </select>

        <button
          onClick={() => {
            setBusca("");
            setCategoriaSelecionada("");
          }}
          className="bg-gray-200 rounded-lg px-4 py-2"
        >
          Limpar filtros
        </button>
      </div>

      {/* ===== GRID DE PRODUTOS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-medium">{produto.titulo}</h3>
              <p className="text-sm text-gray-500">
                {produto.descricao}
              </p>

              <p className="mt-2 font-semibold">
                R$ {produto.preco.toFixed(2)}
              </p>

              <button
                onClick={() => setProdutoModal(produto)}
                className="mt-4 w-full border rounded-full py-2 hover:bg-gray-800 hover:text-white"
              >
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MODAL DE DETALHES ===== */}
      {produtoModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setProdutoModal(null)}
        >
          <div
            className="bg-white p-6 rounded-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={produtoModal.imagem}
              className="rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold">
              {produtoModal.titulo}
            </h2>

            <p className="text-gray-500 mt-2">
              {produtoModal.descricao}
            </p>

            <p className="mt-4 text-2xl font-bold">
              R$ {produtoModal.preco.toFixed(2)}
            </p>

            <button
              onClick={() => {
                addToCart({
                id: produtoModal.id,
                title: produtoModal.titulo,
                desc: produtoModal.descricao,
                price: produtoModal.preco,
                img: produtoModal.imagem,
                category: produtoModal.categoria,
              });
                setProdutoModal(null);
              }}
              className="mt-6 w-full bg-gray-900 text-white py-3 rounded-full"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalogo;
