import type { Product } from "../types/homeTypes";
import { X } from "lucide-react"; // ícone de remover (x)

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
  total: number;
};

const Sidebar = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
  total,
}: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-slate-800">Carrinho</h2>
        <button
          onClick={onClose}
          className="text-slate-500 text-sm hover:underline"
        >
          Fechar
        </button>
      </div>

      <div className="p-4 text-slate-700 space-y-4 overflow-y-auto max-h-[calc(100%-130px)]">
        {cart.length === 0 ? (
          <p className="text-sm text-slate-500">Seu carrinho está vazio.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border-b pb-2"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-12 h-12 object-contain"
              />
              <div className="flex-1 flex flex-col">
                <span className="text-sm font-medium">{item.nome}</span>
                <span className="text-xs text-slate-500">R$ {item.preco}</span>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-slate-400 hover:text-red-500 transition"
                title="Remover item"
              >
                <X size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t space-y-3">
        {cart.length > 0 && (
          <>
            <div className="flex justify-between text-sm text-slate-700 font-medium">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={onClearCart}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 transition"
            >
              Esvaziar carrinho
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
