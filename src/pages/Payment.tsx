import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import type { CartItem } from "../types/cartTypes";
import Button from "../components/Button";

const VALID_COUPON = "ROCKETLABVDEV";
const DISCOUNT_PERCENTAGE = 0.1;

const Payment = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);
  const [metodo, setMetodo] = useState<"cartao" | "pix">("cartao");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      alert("Você precisa estar logado para acessar esta página.");
      navigate("/login");
    } else {
      const storedCart = localStorage.getItem(`cart_${currentUser.id}`);
      const storedCoupon = localStorage.getItem(`coupon_${currentUser.id}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
      setAppliedCoupon(storedCoupon);
    }
  }, [currentUser, navigate]);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const discount =
    appliedCoupon === VALID_COUPON ? subtotal * DISCOUNT_PERCENTAGE : 0;
  const total = subtotal - discount;

  const handlePagamento = () => {
    if (!currentUser) return;
    localStorage.removeItem(`cart_${currentUser.id}`);
    localStorage.removeItem(`coupon_${currentUser.id}`);
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
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">
                      Resumo do Pedido
                    </h2>
                    <ul className="space-y-3">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="flex items-center gap-2">
                            <img
                              src={item.imagem}
                              alt={item.nome}
                              className="w-10 h-10 object-contain rounded"
                            />
                            <span>
                              {item.nome} x {item.quantidade}
                            </span>
                          </span>
                          <span className="font-medium">
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t mt-4 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                      </div>

                      {appliedCoupon === VALID_COUPON && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Desconto (Cupom {appliedCoupon}):</span>
                          <span>- R$ {discount.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total:</span>
                        <span>R$ {total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-4">
                        Método de Pagamento
                      </h2>
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
                    </div>

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
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                          Pagar R$ {total.toFixed(2)}
                        </button>
                      </form>
                    )}

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
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                          Confirmar Pagamento de R$ {total.toFixed(2)}
                        </button>
                      </div>
                    )}
                  </div>
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
