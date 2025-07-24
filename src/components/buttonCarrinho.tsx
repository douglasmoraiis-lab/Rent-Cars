// src/components/buttonCarrinho.tsx

// ✅ MELHORIA: Importar tudo da mesma fonte em uma única linha.
//    O "type" antes de "Product" é uma boa prática em TypeScript moderno,
//    deixando claro que estamos importando apenas a definição de um tipo.
import { useCart, type Product } from "../context/CartContext";

// ✅ MELHORIA: Definir o tipo das props de forma mais limpa.
type ProdutoCardProps = {
  produto: Product;
};

// O nome do seu arquivo é "buttonCarrinho.tsx", mas o componente pode se chamar "ProdutoCard".
// Isso é perfeitamente normal.
function ProdutoCard({ produto }: ProdutoCardProps) {
  // A lógica aqui já estava perfeita!
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