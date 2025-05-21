import { useState } from "react";
import { products } from "../mocks/products";
import type { Product } from "../types/homeTypes";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShoppingCart } from "lucide-react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.preco, 0);

  return (
    <>
      <Header onCartClick={() => setIsSidebarOpen(true)} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        total={total}
      />

      <div className="flex flex-col items-center w-full min-h-screen p-6 gap-8 bg-slate-50 pt-24">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {products.map((produto: Product) => (
            <li
              key={produto.id}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition duration-200"
            >
              <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md bg-white mb-4">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">
                {produto.nome}
              </h2>
              <p className="text-sm text-slate-500">{produto.descricao}</p>
              <strong className="text-slate-700 mt-3 text-lg">
                R$ {produto.preco}
              </strong>
              <button
                onClick={() => handleAddCart(produto)}
                className="mt-4 flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ShoppingCart size={16} />
                Adicionar ao carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
