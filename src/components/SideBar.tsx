// src/components/SideBar.tsx
import React from "react";
import { X } from "lucide-react"; // Ícone para fechar
import type { SidebarProps } from "../types/homeTypes"; // Importe Product e SidebarProps

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
  total,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Carrinho de Compras</h2>
          <button onClick={onClose}>
            <X size={24} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-140px)]">
          {" "}
          {cart.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li
                  key={item.id + "-" + index}
                  className="flex items-center justify-between py-2 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.nome}</p>
                      <p className="text-sm text-gray-600">
                        R$ {item.preco.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          <div className="flex justify-between font-bold text-lg mb-2">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button
            onClick={onClearCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mb-2"
          >
            Limpar Carrinho
          </button>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
