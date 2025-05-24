export type Product = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  imagensAdicionais?: string[];
  destaque: boolean;
  chave?: string[];
  especificacoes?: { [key: string]: string };
  avaliacoes?: { rating: number; comment: string; user: string }[];
  estoque: number;
};

export interface ProductCarouselProps {
  products: Product[];
  onAddCart: (product: Product) => void;
}

export interface HeaderProps {
  onCartClick: () => void;
  filtro: string;
  setFiltro: (filtro: string) => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  total: number;
}

export interface ProductPageProps {
  handleAddCart: (product: Product) => void;
}
