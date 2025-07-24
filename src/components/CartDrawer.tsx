import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

type CartDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-600">
                <h2 className="text-lg font-semibold">🛒 Carrinho</h2>
                <button onClick={onClose}>
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
                {cart.length === 0 ? (
                    <p className="text-center mt-10">Seu carrinho está vazio.</p>
                ) : (
                    <ul className="space-y-3">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="border p-2 rounded flex items-center gap-3"
                            >
                                {item.imagem && (
                                    <img
                                        src={item.imagem}
                                        alt={item.nome}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                )}
                                <div className="flex-1">
                                    <p className="font-medium">{item.nome}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-300">
                                        Quantidade: {item.quantidade}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                                        R$ {(item.preco * item.quantidade).toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 text-sm"
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {cart.length > 0 && (
                <div className="p-4 border-t dark:border-gray-600">
                    <div className="flex justify-between mb-2 font-semibold">
                        <span>Total:</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={clearCart}
                        className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
                    >
                        Limpar Carrinho
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartDrawer;
