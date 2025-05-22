import type { Product } from "../types/homeTypes";

export const products: Product[] = [
  {
    id: 1,
    nome: "Fone de Ouvido Sem Fio",
    descricao:
      "Fone Bluetooth com cancelamento de ruído e bateria de longa duração.",
    preco: 149.9,
    imagem: "https://m.media-amazon.com/images/I/41OrZd9BcjL._AC_SX679_.jpg",
    chave: ["fone", "bluetooth", "audio", "sem fio"],
  },
  {
    id: 2,
    nome: "Smartwatch FitX",
    descricao: "Relógio inteligente com monitoramento cardíaco e passos.",
    preco: 199.9,
    imagem:
      "https://m.media-amazon.com/images/I/71s7fVYV1kL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["relogio", "smartwatch", "fitness", "cardiaco"],
  },
  {
    id: 3,
    nome: "Câmera de Segurança Wi-Fi",
    descricao: "Câmera HD com visão noturna e acesso pelo celular.",
    preco: 299.99,
    imagem:
      "https://m.media-amazon.com/images/I/41ThE8NNTSL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["camera", "segurança", "wifi", "monitoramento"],
    destaque: true,
  },
  {
    id: 4,
    nome: "Mouse Gamer RGB",
    descricao: "Mouse ergonômico com iluminação RGB e até 16000 DPI.",
    preco: 89.9,
    imagem:
      "https://m.media-amazon.com/images/I/61zsUS-OjyL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["mouse", "gamer", "rgb", "periferico"],
  },
  {
    id: 5,
    nome: "Teclado Mecânico",
    descricao: "Teclado com switches azuis e iluminação personalizada.",
    preco: 159.9,
    imagem:
      "https://m.media-amazon.com/images/I/61O+xK4F6aL._AC_SY300_SX300_.jpg",
    chave: ["teclado", "mecanico", "periferico", "rgb"],
  },
  {
    id: 6,
    nome: "Speaker Bluetooth Portátil",
    descricao: "Caixa de som potente, resistente à água, com graves intensos.",
    preco: 129.9,
    imagem:
      "https://m.media-amazon.com/images/I/71uji1ExbsL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["caixa", "bluetooth", "speaker", "som", "portatil"],
  },
  {
    id: 7,
    nome: "Carregador Turbo USB-C",
    descricao: "Carregador rápido compatível com vários modelos Android.",
    preco: 59.9,
    imagem:
      "https://m.media-amazon.com/images/I/51-zHTbxsSL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["carregador", "usb-c", "turbo", "rapido"],
  },
  {
    id: 8,
    nome: "Notebook Ultrafino X1",
    descricao: "Notebook com tela Full HD, SSD de 512GB e 16GB RAM.",
    preco: 3999.9,
    imagem:
      "https://m.media-amazon.com/images/I/51qYgtqNzYL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["notebook", "ultrafino", "ssd", "computador"],
    destaque: true,
  },
  {
    id: 9,
    nome: "Cadeira Gamer Thunder",
    descricao:
      "Cadeira com encosto reclinável e apoio lombar para longas sessões.",
    preco: 899.0,
    imagem:
      "https://m.media-amazon.com/images/I/51AT1Pzf7gL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["cadeira", "gamer", "conforto", "ergonomia"],
  },
  {
    id: 10,
    nome: "Webcam Full HD",
    descricao: "Webcam 1080p ideal para reuniões e streaming.",
    preco: 149.0,
    imagem:
      "https://m.media-amazon.com/images/I/51yQSL7jmJL.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["webcam", "video", "fullhd", "streaming"],
    destaque: true,
  },
  {
    id: 11,
    nome: "Luminária LED Touch",
    descricao:
      "Luminária de mesa com toque sensível, 3 níveis de brilho e bateria recarregável.",
    preco: 74.9,
    imagem:
      "https://m.media-amazon.com/images/I/51dMq6lI+xL._AC_SX342_SY445_.jpg",
    chave: ["luminaria", "led", "touch", "iluminacao"],
  },
  {
    id: 12,
    nome: "Suporte Articulado para Celular",
    descricao: "Ideal para lives, chamadas e vídeos. Ajustável e resistente.",
    preco: 39.9,
    imagem:
      "https://m.media-amazon.com/images/I/71P4LsuwZML.__AC_SX300_SY300_QL70_ML2_.jpg",
    chave: ["suporte", "celular", "ajustavel", "articulado"],
  },
];
