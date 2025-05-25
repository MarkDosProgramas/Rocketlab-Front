import React from "react";
import { Search, ShoppingCartIcon, LogIn, LogOut } from "lucide-react";
import type { HeaderProps } from "../types/homeTypes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header: React.FC<HeaderProps> = ({ onCartClick, filtro, setFiltro }) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-slate-800 text-white p-4 shadow-md z-30 relative">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <h1
            className="text-2xl font-bold tracking-tight whitespace-nowrap cursor-pointer"
            onClick={() => navigate("/")}
          >
            🛒 Rocketlab Store
          </h1>
          <div className="flex items-center bg-slate-700 rounded overflow-hidden flex-1">
            <input
              type="text"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Filtre produtos..."
              className="p-2 bg-transparent placeholder-gray-400 text-white focus:outline-none text-sm flex-1"
            />
            <button
              onClick={() => console.log("Buscar por:", filtro)}
              className="p-2 hover:bg-slate-600 transition"
              title="Buscar"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <img
                src={currentUser.photoUrl}
                alt={currentUser.username}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                title={`Bem-vindo, ${currentUser.username}!`}
              />
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm text-white hover:text-red-400 transition-colors"
              >
                <LogOut size={18} />
                Sair
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 text-sm text-white hover:text-slate-300 transition-colors"
            >
              <LogIn size={18} />
              Entrar
            </button>
          )}

          <button
            onClick={onCartClick}
            className="bg-white text-slate-800 px-4 py-2 rounded shadow hover:bg-slate-300 transition flex items-center justify-center gap-1"
          >
            <ShoppingCartIcon size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
