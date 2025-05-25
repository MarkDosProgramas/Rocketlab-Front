import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import type { CartItem } from "../types/cartTypes";
import Button from "../components/Button";

const Payment = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);
  const [metodo, setMetodo] = useState<"cartao" | "pix">("cartao");

  useEffect(() => {
    if (!currentUser) {
      alert("Você precisa estar logado para acessar esta página.");
      navigate("/login");
    } else {
      const storedCart = localStorage.getItem(`cart_${currentUser.id}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    }
  }, [currentUser, navigate]);

  const total = cart.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const handlePagamento = () => {
    if (!currentUser) return;
    localStorage.removeItem(`cart_${currentUser.id}`);
    setCart([]);
    setPagamentoConcluido(true);
  };

  return (
    <>
      <Button />
      <div className="min-h-screen pt-24 p-4 bg-slate-50 flex flex-col items-center">
        <div className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-md border border-slate-200">
          {pagamentoConcluido ? (
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-green-600">
                Pagamento Concluído ✅
              </h1>
              <p className="text-slate-700">
                Obrigado pela sua compra! Seu pedido será processado em breve.
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                Finalizar Pagamento
              </h1>

              {cart.length === 0 ? (
                <p className="text-center text-gray-600">
                  Seu carrinho está vazio.
                </p>
              ) : (
                <>
                  <ul className="mb-4 text-sm text-slate-700">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        {/* Nome e Quantidade do lado esquerdo */}
                        <span>
                          {item.nome} x {item.quantidade}
                        </span>
                        {/* Preço total do item alinhado à direita */}
                        <span className="font-medium">
                          R$ {(item.preco * item.quantidade).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Botões de seleção de método */}
                  <div className="flex justify-center gap-4 mb-6">
                    <button
                      onClick={() => setMetodo("cartao")}
                      className={`px-4 py-2 rounded-lg font-medium border transition ${
                        metodo === "cartao"
                          ? "bg-slate-800 text-white"
                          : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      Cartão
                    </button>
                    <button
                      onClick={() => setMetodo("pix")}
                      className={`px-4 py-2 rounded-lg font-medium border transition ${
                        metodo === "pix"
                          ? "bg-slate-800 text-white"
                          : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      Pix
                    </button>
                  </div>

                  {/* Formulário Cartão */}
                  {metodo === "cartao" && (
                    <form
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handlePagamento();
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Nome no Cartão"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Número do Cartão"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500"
                        required
                      />
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="Validade (MM/AA)"
                          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500"
                          required
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500"
                          required
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="CPF do titular"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        Confirmar Pagamento
                      </button>
                    </form>
                  )}

                  {/* PIX */}
                  {metodo === "pix" && (
                    <div className="text-center space-y-4">
                      <p className="text-slate-700">
                        Escaneie o QR Code ou copie a chave Pix:
                      </p>
                      <div className="flex justify-center">
                        <img
                          src="/QRCODE.png"
                          alt="QR Code Pix"
                          className="w-40 h-40 border rounded-lg"
                        />
                      </div>
                      <div className="bg-slate-100 text-slate-800 text-sm p-3 rounded-md">
                        pix@rocketlabstore.com
                      </div>
                      <button
                        type="button"
                        onClick={handlePagamento}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors"
                      >
                        Confirmar Pagamento
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
