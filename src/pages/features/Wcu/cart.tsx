import { useCart } from "../../../context/CartContext";

function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div>
            <h1>🛒 Carrinho de Compras</h1>
            {cart.length === 0 && <p>Seu carrinho está vazio.</p>}
            {cart.map(item => (
                <div key={item.id}>
                    {item.nome} - R$ {item.preco} x {item.quantidade}
                    <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
            ))}
            <p><strong>Total: R$ {total}</strong></p>
            <button onClick={clearCart}>Limpar carrinho</button>
        </div>
    );
}

export default Cart;
