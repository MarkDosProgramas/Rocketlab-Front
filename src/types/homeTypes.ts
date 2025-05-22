export interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  chave: string[];
  destaque?: boolean;
}
