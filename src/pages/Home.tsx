import { useEffect, useState } from "react";
import { products } from "../mocks/products";
import type { Product } from "../types/homeTypes";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../types/cartTypes";
import { useAuth } from "../contexts/AuthContext";

const VALID_COUPON = "ROCKETLABVDEV";
const DISCOUNT_PERCENTAGE = 0.1;

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentUser } = useAuth();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (!currentUser) return [];
    const stored = localStorage.getItem(`cart_${currentUser.id}`);
    return stored ? JSON.parse(stored) : [];
  });

  const [filtro, setFiltro] = useState("");

  const navigate = useNavigate();

  const handleAddCart = (product: Product) => {
    if (!currentUser) {
      alert("Você precisa estar logado para adicionar ao carrinho.");
      navigate("/login");
      return;
    }

    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      const newCart = [...prevCart];

      if (index !== -1) {
        newCart[index] = {
          ...newCart[index],
          quantidade: newCart[index].quantidade + 1,
        };
      } else {
        newCart.push({
          id: product.id,
          nome: product.nome,
          imagem: product.imagem,
          preco: product.preco,
          quantidade: 1,
        });
      }

      if (currentUser) {
        localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(newCart));
      }

      return newCart;
    });

    setIsSidebarOpen(true);
  };

  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const incrementItem = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decrementItem = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const handleApplyCoupon = (coupon: string) => {
    if (coupon === VALID_COUPON) {
      setAppliedCoupon(coupon);
      if (currentUser) {
        localStorage.setItem(`coupon_${currentUser.id}`, coupon);
      }
    } else {
      alert("Cupom inválido!");
      setAppliedCoupon(null);
      if (currentUser) {
        localStorage.removeItem(`coupon_${currentUser.id}`);
      }
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const total = appliedCoupon ? subtotal * (1 - DISCOUNT_PERCENTAGE) : subtotal;

  const produtosFiltrados = products.filter((produto) =>
    `${produto.nome} ${produto.descricao} ${produto.chave?.join(" ") || ""}`
      .toLowerCase()
      .includes(filtro.toLowerCase())
  );

  const produtosDestaque = products.filter((p) => p.destaque);
  const todosProdutos = products;

  const listaParaExibir = filtro ? produtosFiltrados : null;

  const handleCartClick = () => {
    if (!currentUser) {
      alert("Você precisa estar logado para acessar o carrinho.");
      navigate("/login");
      return;
    }

    setIsSidebarOpen(true);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(cart));
    }
  }, [cart, currentUser]);

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
            className="mt-4 flex items-center gap-2 text-sm text-white bg-slate-700 hover:bg-slate-500 px-4 py-2 rounded-lg transition-colors mx-auto"
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
        onCartClick={handleCartClick}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCart([])}
        onIncrementItem={incrementItem}
        onDecrementItem={decrementItem}
        total={subtotal}
        onApplyCoupon={handleApplyCoupon}
        appliedCoupon={appliedCoupon}
        discountedTotal={total}
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
