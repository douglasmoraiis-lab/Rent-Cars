// src/components/buttonCarrinho.tsx

import { useCart, type Product } from "../context/CartContext";

type ProdutoCardProps = {
  produto: Product;
};

function ProdutoCard({ produto }: ProdutoCardProps) {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>R$ {produto.preco}</p>
      <button onClick={() => addToCart(produto)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default ProdutoCard;