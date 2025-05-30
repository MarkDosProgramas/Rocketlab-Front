import React, { useState } from "react";
import { X } from "lucide-react";
import type { CartItem } from "../types/cartTypes";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
  onIncrementItem: (id: number) => void;
  onDecrementItem: (id: number) => void;
  total: number;
  onApplyCoupon: (coupon: string) => void;
  appliedCoupon: string | null;
  discountedTotal: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
  onIncrementItem,
  onDecrementItem,
  total,
  onApplyCoupon,
  appliedCoupon,
  discountedTotal,
}) => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    onApplyCoupon(couponCode);
    setCouponCode("");
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Carrinho de Compras</h2>
          <button onClick={onClose}>
            <X size={24} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-240px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-10 h-10 object-contain rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.nome}</p>
                      <p className="text-sm text-gray-600">
                        R$ {(item.preco * item.quantidade).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => onDecrementItem(item.id)}
                          className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                        >
                          -
                        </button>
                        <span>{item.quantidade}</span>
                        <button
                          onClick={() => onIncrementItem(item.id)}
                          className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600 text-sm"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          {/* Cupom de desconto */}
          <div className="mb-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Código do cupom"
                className="flex-1 px-3 py-1 border rounded"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-600"
              >
                Aplicar
              </button>
            </div>
            {appliedCoupon && (
              <p className="text-green-600 text-sm mt-1">
                Cupom {appliedCoupon} aplicado!
              </p>
            )}
          </div>

          <div className="flex justify-between font-bold text-lg mb-2">
            <span>Subtotal:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          {appliedCoupon && (
            <div className="flex justify-between text-green-600 text-sm mb-2">
              <span>Desconto (10%):</span>
              <span>- R$ {(total - discountedTotal).toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between font-bold text-lg mb-2">
            <span>Total:</span>
            <span>R$ {discountedTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={onClearCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mb-2 transition-colors"
          >
            Limpar Carrinho
          </button>
          <button
            onClick={() => navigate("/payment")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded transition-colors"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
