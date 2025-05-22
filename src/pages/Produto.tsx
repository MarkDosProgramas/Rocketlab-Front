import { useParams } from "react-router-dom";
import { products } from "../mocks/products"; // importe seu array de produtos
import type { Product } from "../types/homeTypes";

const Produto = () => {
  const { id } = useParams<{ id: string }>();

  // Busca o produto pelo id (convertendo id para number, pois seus ids são numéricos)
  const produto: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Produto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-slate-50 pt-24">
      <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow-md text-center">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="mx-auto mb-6 max-h-96 object-contain"
        />
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          {produto.nome}
        </h1>
        <p className="text-slate-700 text-lg">
          {produto.descricao
            ? produto.descricao
            : "Descrição não disponível para este produto."}
        </p>
      </div>
    </div>
  );
};

export default Produto;
