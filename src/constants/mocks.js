const receitas = [
  {
    id: "Mexican Egg Mix",
    image: [require("../assets/images/italian_salad.png")],
    nome: "Mexican Egg Mix",
    tags: ["4.5", "facil"],
    tempo: "15 min",
    descrição:
      "A gentle combination of carefully chosen veggies with a Mexican taste.",
  },
  {
    id: "Italian Baked",
    image: [require("../assets/images/food_mexican.png")],
    nome: "Italian Baked",
    tags: ["4.8", "dificil"],
    tempo: "30 min",
    descrição:
      "Italian based spicy and green beans baked together with cheeze.",
  },
  {
    id: "Crepe",
    image: [require("../assets/images/food_crepe.png")],
    nome: "Crepe",
    tags: ["5.0", "facil"],
    tempo: "15 min",
    descrição:
      "A massa é preparada de forma que possa formar uma camada delgada no fundo duma frigideira apenas pincelada com manteiga ou outra gordura.",
  },
];

const filtro = [
  {
    id: "Maçã",
    image: [require("../assets/icon/apple.png")],
    nome: "Maçã",
  },
  {
    id: "Carne",
    image: [require("../assets/icon/meat.png")],
    nome: "Carne",
  },
  {
    id: "Sushi",
    image: [require("../assets/icon/sushi.png")],
    nome: "Sushi",
  },
  {
    id: "Fritas",
    image: [require("../assets/icon/fries.png")],
    nome: "Fritas",
  },
];

const amigos_grupo1 = [
  require("../assets/images/amigo1.png"),
  require("../assets/images/amigo2.png"),
  require("../assets/images/amigo3.png"),
  require("../assets/images/amigo4.png"),
];
const amigos_grupo2 = [
  require("../assets/images/amigo1.png"),
  require("../assets/images/amigo2.png"),
  require("../assets/images/amigo3.png"),
  require("../assets/images/amigo5.png"),
];
export { receitas, filtro, amigos_grupo1, amigos_grupo2 };
