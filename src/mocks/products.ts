import type { Product } from "../types/homeTypes";

export const products: Product[] = [
  {
    id: 1,
    nome: "Fone de Ouvido Sem Fio",
    descricao:
      "Experimente o som imersivo com este fone Bluetooth de última geração. Possui cancelamento de ruído ativo para uma experiência sonora sem interrupções e bateria de longa duração, ideal para viagens e uso diário. Conforto e qualidade em um solo produto.",
    preco: 149.9,
    imagem: "https://m.media-amazon.com/images/I/41OrZd9BcjL._AC_SX679_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/51GJdqkji9L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/515HklgtXkL._AC_SX679_.jpg",
    ],
    chave: ["fone", "bluetooth", "audio", "sem fio", "cancelamento de ruído"],
    destaque: true,
    especificacoes: {
      Conectividade: "Bluetooth 5.2",
      Bateria: "Até 30 horas",
      Recursos: "Cancelamento de Ruído Ativo (ANC)",
      Peso: "250g",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Qualidade de som incrível e muito confortável!",
        user: "Ana C.",
      },
      { rating: 4, comment: "A bateria dura muito, adorei!", user: "Bruno L." },
    ],
    estoque: 15,
  },
  {
    id: 2,
    nome: "Smartwatch FitX",
    descricao:
      "Mantenha-se conectado e monitore sua saúde com o Smartwatch FitX. Este relógio inteligente avançado oferece monitoramento contínuo de frequência cardíaca, contador de passos, acompanhamento de sono e notificações em tempo real do seu smartphone. Perfeito para seu estilo de vida ativo.",
    preco: 199.9,
    imagem:
      "https://m.media-amazon.com/images/I/71s7fVYV1kL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/51SsOlKtnqL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/514FGjX1xyL._AC_SX679_.jpg",
    ],
    chave: ["relogio", "smartwatch", "fitness", "cardiaco", "saúde"],
    destaque: false,
    especificacoes: {
      Tela: "1.5 polegadas AMOLED",
      Resistência: "IP68 (água e poeira)",
      Sensores: "Frequência cardíaca, SpO2",
      Compatibilidade: "Android e iOS",
    },
    avaliacoes: [
      {
        rating: 4,
        comment: "Ótimo para monitorar os treinos, bem preciso.",
        user: "Carlos S.",
      },
      {
        rating: 5,
        comment: "Bateria excelente e fácil de usar. Recomendo!",
        user: "Mariana P.",
      },
    ],
    estoque: 20,
  },
  {
    id: 3,
    nome: "Câmera de Segurança Wi-Fi",
    descricao:
      "Garanta a segurança da sua casa com a Câmera de Segurança Wi-Fi HD. Com visão noturna avançada e detecção de movimento, ela permite que você monitore seu ambiente de qualquer lugar através do seu celular. Instalação simples e alertas em tempo real para sua tranquilidade.",
    preco: 299.99,
    imagem:
      "https://m.media-amazon.com/images/I/41ThE8NNTSL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/41hQ4O29nKL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61VndF1k+mL._AC_SX679_.jpg",
    ],
    chave: ["camera", "segurança", "wifi", "monitoramento", "casa inteligente"],
    destaque: true,
    especificacoes: {
      Resolução: "Full HD 1080p",
      Visão: "Noturna infravermelho",
      Conexão: "Wi-Fi 2.4GHz",
      Armazenamento: "MicroSD (até 128GB) e Nuvem",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Fácil de configurar e a imagem é muito boa, mesmo à noite.",
        user: "João V.",
      },
      {
        rating: 4,
        comment: "Me sinto mais seguro com ela em casa.",
        user: "Fernanda G.",
      },
    ],
    estoque: 10,
  },
  {
    id: 4,
    nome: "Mouse Gamer RGB",
    descricao:
      "Eleve sua experiência de jogo com o Mouse Gamer RGB. Projetado para desempenho e conforto, ele oferece iluminação RGB personalizável e um sensor de alta precisão de até 16000 DPI. Sua ergonomia garante longas horas de jogo sem fadiga.",
    preco: 89.9,
    imagem:
      "https://m.media-amazon.com/images/I/61zsUS-OjyL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/71HTftApKzL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61ui0HESDTL._AC_SX679_.jpg",
    ],
    chave: ["mouse", "gamer", "rgb", "periferico", "pc"],
    destaque: false,
    especificacoes: {
      DPI: "Até 16000",
      Sensor: "Óptico de alta precisão",
      Botões: "6 programáveis",
      Iluminação: "RGB personalizável",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Excelente mouse, muito preciso e bonito.",
        user: "Pedro R.",
      },
      {
        rating: 4,
        comment: "Bom custo-benefício, a iluminação é um show!",
        user: "Alice M.",
      },
    ],
    estoque: 30,
  },
  {
    id: 5,
    nome: "Teclado Mecânico",
    descricao:
      "Domine o campo de batalha com este Teclado Mecânico de alta performance. Equipado com switches azuis para uma resposta tátil e sonora satisfatória, e iluminação personalizável por tecla. Construção robusta para durar em sessões intensas.",
    preco: 159.9,
    imagem: "https://m.media-amazon.com/images/I/61O+xK4F6aL._AC_SX679_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/71iHyKnaiRL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Wq6M6IQxL._AC_SX679_.jpg",
    ],
    chave: ["teclado", "mecanico", "periferico", "rgb", "gamer"],
    destaque: false,
    especificacoes: {
      Tipo_Switch: "Azul (Clicky)",
      Layout: "ABNT2",
      Iluminação: "RGB por tecla",
      Material: "Alumínio e ABS",
    },
    avaliacoes: [
      {
        rating: 5,
        comment:
          "Adorei o som e a sensação das teclas. Perfeito para digitar e jogar.",
        user: "Lucas F.",
      },
      {
        rating: 4,
        comment: "Um pouco barulhento, mas muito responsivo.",
        user: "Beatriz L.",
      },
    ],
    estoque: 25,
  },
  {
    id: 6,
    nome: "Speaker Bluetooth Portátil",
    descricao:
      "Leve sua música para qualquer lugar com o Speaker Bluetooth Portátil. Com áudio potente e graves intensos, ele é resistente à água, perfeito para festas na piscina ou aventuras ao ar livre. Bateria de longa duração para horas de diversão.",
    preco: 129.9,
    imagem:
      "https://m.media-amazon.com/images/I/71uji1ExbsL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/71-CZc5lnsL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/41q51G0mGyL._AC_SX679_.jpg",
    ],
    chave: [
      "caixa",
      "bluetooth",
      "speaker",
      "som",
      "portatil",
      "resistente a água",
    ],
    destaque: true,
    especificacoes: {
      Conectividade: "Bluetooth 5.0",
      Potência: "20W RMS",
      Resistência: "IPX7 (à prova d'água)",
      Bateria: "Até 12 horas",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Som de excelente qualidade e super portátil!",
        user: "Sofia C.",
      },
      {
        rating: 4,
        comment: "Perfeita para a piscina, a bateria dura muito.",
        user: "Gabriel N.",
      },
    ],
    estoque: 18,
  },
  {
    id: 7,
    nome: "Carregador Turbo USB-C",
    descricao:
      "Carregue seus dispositivos em tempo recorde com o Carregador Turbo USB-C. Com tecnologia de carregamento rápido, ele é compatível com uma vasta gama de modelos Android e outros dispositivos USB-C. Seguro e eficiente para o seu dia a dia.",
    preco: 59.9,
    imagem:
      "https://m.media-amazon.com/images/I/51-zHTbxsSL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/61xl26+LonL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71pZ6d7HUuL._AC_SX679_.jpg",
    ],
    chave: ["carregador", "usb-c", "turbo", "rapido", "celular"],
    destaque: false,
    especificacoes: {
      Potência: "20W",
      Porta: "USB-C",
      Compatibilidade: "Universal com USB-C",
      Segurança: "Proteção contra sobrecarga",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Carrega meu celular super rápido, muito bom!",
        user: "Isabela R.",
      },
      {
        rating: 4,
        comment: "Compacto e funciona perfeitamente.",
        user: "Daniel M.",
      },
    ],
    estoque: 40,
  },
  {
    id: 8,
    nome: "Notebook Ultrafino X1",
    descricao:
      "Produtividade e portabilidade se encontram no Notebook Ultrafino X1. Com uma tela Full HD vibrante, SSD de 512GB para inicialização ultrarrápida e 16GB de RAM para multitarefas sem travamentos. Leve e potente para o trabalho ou estudo.",
    preco: 3999.9,
    imagem:
      "https://m.media-amazon.com/images/I/51qYgtqNzYL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/51lgkIfugnL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/512wp+WzZ4L._AC_SX679_.jpg",
    ],
    chave: [
      "notebook",
      "ultrafino",
      "ssd",
      "computador",
      "portatil",
      "desempenho",
    ],
    destaque: true,
    especificacoes: {
      Processador: "Intel Core i7 (12ª Gen)",
      RAM: "16GB DDR4",
      Armazenamento: "SSD NVMe 512GB",
      Tela: "14 polegadas Full HD IPS",
      Sistema_Operacional: "Windows 11 Home",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Extremamente rápido e leve. Ótimo para trabalhar e viajar.",
        user: "Ricardo P.",
      },
      {
        rating: 4,
        comment:
          "A bateria poderia durar um pouco mais, mas é um excelente notebook.",
        user: "Laura V.",
      },
    ],
    estoque: 5,
  },
  {
    id: 9,
    nome: "Cadeira Gamer Thunder",
    descricao:
      "Conforto supremo para suas longas sessões de jogo ou trabalho com a Cadeira Gamer Thunder. Possui encosto reclinável, apoio lombar ajustável e braços 4D, garantindo a postura ideal e reduzindo a fadiga. Construída com materiais de alta qualidade para durabilidade.",
    preco: 899.0,
    imagem:
      "https://m.media-amazon.com/images/I/51AT1Pzf7gL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/51s6hte78JL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51d-fQESm0L._AC_SX679_.jpg",
    ],
    chave: ["cadeira", "gamer", "conforto", "ergonomia", "escritorio"],
    destaque: false,
    especificacoes: {
      Material: "Couro PU e espuma de alta densidade",
      Ajustes: "Reclínio 90-180°, altura, braços 4D",
      Base: "Metal resistente",
      Rodas: "Nylon silenciosas",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "A melhor cadeira que já tive! Muito confortável.",
        user: "Gustavo O.",
      },
      {
        rating: 4,
        comment: "Fácil de montar e excelente suporte para a lombar.",
        user: "Helena D.",
      },
    ],
    estoque: 8,
  },
  {
    id: 10,
    nome: "Webcam Full HD",
    descricao:
      "Faça videochamadas e transmissões ao vivo com clareza cristalina usando a Webcam Full HD. Resolução de 1080p a 30fps, microfone embutido com redução de ruído e foco automático. Ideal para trabalho remoto, aulas online e streaming.",
    preco: 149.0,
    imagem:
      "https://m.media-amazon.com/images/I/51yQSL7jmJL.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/51w8Cv4Ip8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51ydGwt8fhL._AC_SX679_.jpg",
    ],
    chave: ["webcam", "video", "fullhd", "streaming", "conferencia"],
    destaque: true,
    especificacoes: {
      Resolução: "1080p @ 30fps",
      Foco: "Automático",
      Microfone: "Integrado com redução de ruído",
      Conexão: "USB 2.0 Plug & Play",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Qualidade de imagem e áudio excelentes para minhas reuniões.",
        user: "Felipe B.",
      },
      {
        rating: 4,
        comment: "Cumpre o que promete, ótima webcam para o preço.",
        user: "Julia E.",
      },
    ],
    estoque: 12,
  },
  {
    id: 11,
    nome: "Luminária LED Touch",
    descricao:
      "Adicione estilo e funcionalidade ao seu espaço com a Luminária LED Touch. Com um design elegante e controle de toque sensível, oferece 3 níveis de brilho para diferentes ambientes e uma bateria recarregável para uso sem fio. Perfeita para leitura ou como luz ambiente.",
    preco: 74.9,
    imagem:
      "https://m.media-amazon.com/images/I/51dMq6lI+xL._AC_SX342_SY445_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/71mST50HIXL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81LPkVOc1+L._AC_SX679_.jpg",
    ],
    chave: ["luminaria", "led", "touch", "iluminacao", "mesa"],
    destaque: false,
    especificacoes: {
      Brilho: "3 níveis (Toque)",
      Cor_Luz: "Branco Quente",
      Bateria: "Recarregável (via USB)",
      Material: "ABS e Silicone",
    },
    avaliacoes: [
      {
        rating: 5,
        comment: "Linda e funcional, o controle de toque é muito prático.",
        user: "Camila D.",
      },
      {
        rating: 4,
        comment: "Ideal para a minha mesa de estudos, a bateria dura bem.",
        user: "Enzo P.",
      },
    ],
    estoque: 22,
  },
  {
    id: 12,
    nome: "Suporte Articulado para Celular",
    descricao:
      "O Suporte Articulado para Celular é o acessório perfeito para quem busca versatilidade. Ideal para lives, videochamadas, assistir filmes ou seguir receitas. Totalmente ajustável em altura e ângulo, proporcionando a melhor visualização em qualquer situação. Robusto e fácil de instalar em mesas ou bancadas.",
    preco: 39.9,
    imagem:
      "https://m.media-amazon.com/images/I/71P4LsuwZML.__AC_SX300_SY300_QL70_ML2_.jpg",
    imagensAdicionais: [
      "https://m.media-amazon.com/images/I/71bnvKS4r0L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71urMsztEcL._AC_SX679_.jpg",
    ],
    chave: ["suporte", "celular", "ajustavel", "articulado", "acessório"],
    destaque: false,
    especificacoes: {
      Compatibilidade: "Celulares e Tablets até 10 polegadas",
      Material: "Liga de Alumínio e ABS",
      Ajuste: "360° rotação, braço articulado",
      Fixação: "Braçadeira de mesa",
    },
    avaliacoes: [
      {
        rating: 4,
        comment: "Muito útil para gravar vídeos, a articulação é firme.",
        user: "Thiago A.",
      },
      {
        rating: 5,
        comment:
          "Qualidade excelente pelo preço, recomendo para quem faz live.",
        user: "Lara C.",
      },
    ],
    estoque: 35,
  },
];
