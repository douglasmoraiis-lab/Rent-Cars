import { useCart } from "../context/CartContext";

const Carrinho = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">🛒 Seu Carrinho</h1>

            {cart.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="border p-3 rounded flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{item.nome}</p>
                                    <p>Qtd: {item.quantidade}</p>
                                    <p>R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 text-lg font-semibold">Total: R$ {total.toFixed(2)}</div>
                    <button
                        onClick={clearCart}
                        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                    >
                        Limpar Carrinho
                    </button>
                </>
            )}
        </div>
    );
};

export default Carrinho;
