import { Navigate, useNavigate } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const chageToCart = () => {
    navigate("/cart");
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-slate-800">Minha Conta</h2>
        <button onClick={onClose} className="text-slate-500 text-sm">
          Fechar
        </button>
      </div>

      <div className="p-4 text-slate-700">
        <h3 className="text-md font-medium mb-2">Carrinho</h3>
        <button onClick={chageToCart}>Ver seu carrinho</button>
      </div>
    </div>
  );
};

export default Sidebar;
