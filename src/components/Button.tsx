import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 lg:top-8 lg:left-8 z-50
                   bg-white p-3 rounded-full shadow-lg
                   flex items-center gap-2
                   text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        title="Voltar para a página anterior"
      >
        <ArrowLeft size={24} />
        <span className="hidden sm:inline">Voltar</span>
      </button>
    </div>
  );
};

export default Button;
