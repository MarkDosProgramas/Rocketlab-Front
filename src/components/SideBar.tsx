import { X, Trash2 } from "lucide-react";
import { useState } from "react";
import type { SidebarProps } from "../types/homeTypes";

const Sidebar = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
  total,
}: SidebarProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleCheckout = () => {
    alert("Compra finalizada!");
    onClearCart();
    onClose();
    setIsConfirmModalOpen(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50 flex flex-col`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-slate-800">Carrinho</h2>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-red-500"
          title="Fechar"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-sm text-slate-500">Seu carrinho está vazio.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4 border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-sm font-medium">{item.nome}</p>
                  <p className="text-xs text-slate-500">
                    R$ {item.preco.toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(index)}
                className="text-red-500 hover:text-red-700"
                title="Remover"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t space-y-3">
        {cart.length > 0 && (
          <>
            <div className="flex justify-between text-sm text-slate-700">
              <span>Total:</span>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>

            <button
              onClick={onClearCart}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
            >
              Esvaziar carrinho
            </button>

            <button
              onClick={() => setIsConfirmModalOpen(true)}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
            >
              Finalizar compra
            </button>
          </>
        )}
      </div>

      {isConfirmModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirmar compra</h3>
            <p className="text-sm text-slate-600 mb-6">
              Tem certeza de que deseja finalizar a compra?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="px-4 py-2 text-slate-700 hover:underline"
              >
                Cancelar
              </button>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
