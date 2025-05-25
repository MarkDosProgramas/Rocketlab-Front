import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../mocks/products";
import type { Product } from "../types/homeTypes";
import Button from "../components/Button";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";

const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const produto: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  const allProductImages = produto
    ? [produto.imagem, ...(produto.imagensAdicionais || [])]
    : [];

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === allProductImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? allProductImages.length - 1 : prevIndex - 1
    );
  };

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Produto não encontrado.</p>
      </div>
    );
  }

  const averageRating =
    produto.avaliacoes && produto.avaliacoes.length > 0
      ? (
          produto.avaliacoes.reduce((sum, review) => sum + review.rating, 0) /
          produto.avaliacoes.length
        ).toFixed(1)
      : "N/A";
  const numberOfReviews = produto.avaliacoes ? produto.avaliacoes.length : 0;

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-slate-50 pt-24 relative">
      <Button />
      <div className="max-w-6xl w-full bg-white p-8 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-lg mb-6 bg-white-100 rounded-lg overflow-hidden">
            <img
              src={allProductImages[currentImageIndex]}
              alt={produto.nome}
              className="w-full max-h-96 object-contain aspect-square"
            />
            {allProductImages.length > 1 && (
              <>
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          {allProductImages.length > 1 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {allProductImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-contain rounded-md cursor-pointer border-2 ${
                    index === currentImageIndex
                      ? "border-slate-500"
                      : "border-transparent"
                  } hover:border-slate-400 transition-colors`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-3 text-slate-900">
            {produto.nome}
          </h1>

          {numberOfReviews > 0 && (
            <div className="flex items-center gap-2 mb-4 text-lg text-slate-700">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span>
                {averageRating} ({numberOfReviews} avaliações)
              </span>
            </div>
          )}

          <p className="text-slate-700 text-lg mb-6">
            {produto.descricao || "Descrição não disponível para este produto."}
          </p>

          <strong className="text-4xl font-bold text-slate-900 mb-6">
            R$ {produto.preco.toFixed(2)}
          </strong>

          {produto.estoque !== undefined && (
            <p className="text-md mb-4">
              <span className="font-semibold">Disponibilidade: </span>
              {produto.estoque > 0 ? (
                <span className="text-slate-600">
                  Em estoque ({produto.estoque} unidades)
                </span>
              ) : (
                <span className="text-red-600">Esgotado</span>
              )}
            </p>
          )}

          <button
            className="mt-auto flex items-center justify-center gap-3 text-lg text-white bg-slate-700 hover:bg-slate-800 px-6 py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={produto.estoque === 0}
          >
            <ShoppingCart size={24} />
            Adicionar ao carrinho
          </button>

          {produto.especificacoes &&
            Object.keys(produto.especificacoes).length > 0 && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Especificações Técnicas
                </h3>
                <ul className="text-slate-700">
                  {Object.entries(produto.especificacoes).map(
                    ([key, value]) => (
                      <li
                        key={key}
                        className="flex justify-between py-1 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-semibold">{key}:</span>
                        <span>{value}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

          {produto.avaliacoes && produto.avaliacoes.length > 0 && (
            <div className="mt-8 border-t pt-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Avaliações de Clientes
              </h3>
              <div className="space-y-4">
                {produto.avaliacoes.map((avaliacao, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < avaliacao.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-semibold text-slate-700">
                        {avaliacao.user}
                      </span>
                    </div>
                    <p className="text-slate-800">{avaliacao.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Produto;
