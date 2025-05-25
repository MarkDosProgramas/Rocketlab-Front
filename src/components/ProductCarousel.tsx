import Slider from "react-slick";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Product, ProductCarouselProps } from "../types/homeTypes";

const ProductCarousel = ({ products, onAddCart }: ProductCarouselProps) => {
  const navigate = useNavigate();

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow left-0 z-10 -ml-4`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <ChevronLeft
          size={36}
          className="text-gray-700 hover:text-slate-300 transition-colors"
        />
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow right-0 z-10 -mr-4`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <ChevronRight
          size={36}
          className="text-gray-700 hover:text-slate-300 transition-colors"
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const renderProductCard = (produto: Product) => (
    <div
      key={produto.id}
      className="bg-white border border-slate-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition duration-200 mx-2"
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
      <h2 className="text-xl font-semibold text-slate-800">{produto.nome}</h2>
      <strong className="text-slate-700 mt-3 text-lg">
        R$ {produto.preco}
      </strong>
      <button
        onClick={() => onAddCart(produto)}
        className="mt-4 flex items-center gap-2 text-sm text-white bg-slate-700 hover:bg-slate-500 px-4 py-2 rounded-lg transition-colors mx-auto"
      >
        <ShoppingCart size={16} />
        Adicionar ao carrinho
      </button>
    </div>
  );

  return (
    <Slider {...settings}>
      {products.map((produto) => renderProductCard(produto))}
    </Slider>
  );
};

export default ProductCarousel;
