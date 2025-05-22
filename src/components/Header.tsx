import { Search } from "lucide-react";

type HeaderProps = {
  onCartClick: () => void;
  filtro: string;
  setFiltro: (valor: string) => void;
};

const Header = ({ onCartClick, filtro, setFiltro }: HeaderProps) => {
  return (
    <header className="w-full bg-slate-800 text-white p-4 shadow-md z-10 relative">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
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
        <button
          onClick={onCartClick}
          className="bg-white text-slate-800 px-4 py-2 rounded shadow hover:bg-slate-100 transition"
        >
          Ver Carrinho
        </button>
      </div>
    </header>
  );
};

export default Header;
