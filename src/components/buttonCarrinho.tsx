import { useCart } from "../context/CartContext";
import { Product } from "../context/CartContext";

function ProdutoCard({ produto }: { produto: Product }) {
    const { addToCart } = useCart();

    return (
        <div>
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco}</p>
            <button onClick={() => addToCart(produto)}>Adicionar ao carrinho</button>
        </div>
    );
}

export default ProdutoCard;
