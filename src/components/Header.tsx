type HeaderProps = {
  onCartClick: () => void;
};

const Header = ({ onCartClick }: HeaderProps) => {
  return (
    <header className="w-full bg-slate-800 text-white p-4 shadow-md z-10 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight ml-2">
          🛒 Rocketlab Store
        </h1>
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
