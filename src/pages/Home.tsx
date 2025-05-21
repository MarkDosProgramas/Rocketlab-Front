import { useState } from "react";
import { products } from "../mocks/products";
import type { Product } from "../types/homeTypes";
import Sidebar from "../components/SideBar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 bg-slate-800 text-white px-4 py-2 rounded shadow"
      >
        Minha Conta
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex flex-col items-center w-full min-h-screen p-6 gap-8 bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-800">Nossos Produtos</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {products.map((produto: Product) => (
            <li
              key={produto.id}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition duration-200"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-40 h-40 object-cover mb-4 rounded-md shadow-sm"
              />
              <h2 className="text-xl font-semibold text-slate-800">
                {produto.nome}
              </h2>
              <p className="text-sm text-slate-500">{produto.descricao}</p>
              <strong className="text-slate-700 mt-3 text-lg">
                R$ {produto.preco}
              </strong>
              <button onClick={() => handleAddCart(produto)}>
                adiciona ao carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
