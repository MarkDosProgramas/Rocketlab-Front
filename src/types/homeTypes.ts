export interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  chave: string[];
  destaque?: boolean;
  especificacoes?: { [key: string]: string };
  avaliacoes?: { rating: number; comment: string; user: string }[];
  estoque?: number;
  imagensAdicionais?: string[];
}

export interface ProductCarouselProps {
  products: Product[];
  onAddCart: (product: Product) => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
  total: number;
}

export interface HeaderProps {
  onCartClick: () => void;
  filtro: string;
  setFiltro: (valor: string) => void;
}
