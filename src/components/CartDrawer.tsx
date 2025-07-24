import { useCart, Product } from "../context/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";

type CartDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

    const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

    const handleQuantityChange = (item: Product, change: number) => {
        const newQuantity = item.quantidade + change;
        updateQuantity(item.id, newQuantity);
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={onClose}
                />
            )}
            
            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 z-50 border-l-2 border-blue-500 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b dark:border-gray-600 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <div className="flex items-center space-x-2">
                        <ShoppingBag className="w-6 h-6" />
                        <h2 className="text-xl font-bold">Meu Carrinho</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(100%-5rem)]">
                    <div className="flex-1 p-4 overflow-y-auto">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                                <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">Seu carrinho está vazio</p>
                                <p className="text-gray-400 dark:text-gray-500 text-sm">Adicione alguns carros incríveis!</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                                    >
                                        <div className="flex items-start gap-3">
                                            {item.imagem && (
                                                <img
                                                    src={item.imagem}
                                                    alt={item.nome}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                                />
                                            )}
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                                                    {item.nome}
                                                </h3>
                                                <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                                                    R$ {item.preco.toFixed(2)}
                                                </p>
                                                
                                                {/* Controles de quantidade */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => handleQuantityChange(item, -1)}
                                                            className="p-1 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="w-8 text-center font-medium">
                                                            {item.quantidade}
                                                        </span>
                                                        <button
                                                            onClick={() => handleQuantityChange(item, 1)}
                                                            className="p-1 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-full transition-colors"
                                                        title="Remover item"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                
                                                <div className="mt-2 text-right">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                                        Subtotal: 
                                                    </span>
                                                    <span className="font-bold text-gray-800 dark:text-gray-100 ml-2">
                                                        R$ {(item.preco * item.quantidade).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="p-4 border-t dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    Total:
                                </span>
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    R$ {total.toFixed(2)}
                                </span>
                            </div>
                            
                            <div className="space-y-2">
                                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Finalizar Compra
                                </button>
                                
                                <button
                                    onClick={clearCart}
                                    className="w-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 py-2 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                                >
                                    Limpar Carrinho
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
