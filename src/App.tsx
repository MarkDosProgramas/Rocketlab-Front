import { products } from "./mocks/products";
import type { Product } from "./types/homeTypes";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 gap-5">
      <h1 className="text-2xl font-bold">Produtos</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {products.map((produto: Product) => (
          <li
            key={produto.id}
            className="border p-4 rounded-xl shadow flex flex-col items-center text-center"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-40 h-40 object-cover mb-3 rounded"
            />
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-sm text-gray-600">{produto.descricao}</p>
            <strong className="text-green-600 mt-2">R$ {produto.preco}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
