// src/pages/Home.tsx
import { useState } from "react";
import { products } from "../mocks/products";
import type { Product } from "../types/homeTypes";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [filtro, setFiltro] = useState("");

  const navigate = useNavigate();

  const handleAddCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    setIsSidebarOpen(true);
  };

  const handleRemoveItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((acc, item) => acc + item.preco, 0);

  const produtosFiltrados = products.filter((produto) =>
    `${produto.nome} ${produto.descricao} ${produto.chave?.join(" ") || ""}`
      .toLowerCase()
      .includes(filtro.toLowerCase())
  );

  const produtosDestaque = products.filter((p) => p.destaque);
  const todosProdutos = products;

  const listaParaExibir = filtro ? produtosFiltrados : null;

  const renderLista = (lista: Product[]) => (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {lista.map((produto) => (
        <li
          key={produto.id}
          className="bg-white border border-slate-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition duration-200"
        >
          <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md bg-white mb-4">
            <button
              className="w-full h-full flex items-center justify-center"
              onClick={() => navigate(`/produto/${produto.id}`)}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="max-h-full max-w-full object-contain"
              />
            </button>
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            {produto.nome}
          </h2>
          <strong className="text-slate-700 mt-3 text-lg">
            R$ {produto.preco}
          </strong>
          <button
            onClick={() => handleAddCart(produto)}
            className="mt-4 flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors mx-auto"
          >
            <ShoppingCart size={16} />
            Adicionar ao carrinho
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Header
        onCartClick={() => setIsSidebarOpen(true)}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCart([])}
        total={total}
      />

      <div className="flex flex-col items-center w-full min-h-screen p-6 gap-8 bg-slate-50 pt-24">
        {filtro ? (
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl font-bold mb-4">Resultados</h2>
            {listaParaExibir && listaParaExibir.length > 0 ? (
              renderLista(listaParaExibir)
            ) : (
              <h2 className="text-gray-600 text-center text-lg">
                Nenhum produto encontrado.
              </h2>
            )}
          </div>
        ) : (
          <>
            <div className="w-full max-w-6xl">
              <h2 className="text-2xl font-bold mb-4">Destaques</h2>
              <ProductCarousel
                products={produtosDestaque}
                onAddCart={handleAddCart}
              />
            </div>

            <div className="w-full max-w-6xl">
              <h2 className="text-2xl font-bold mb-4">Todos os Produtos</h2>
              {renderLista(todosProdutos)}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
