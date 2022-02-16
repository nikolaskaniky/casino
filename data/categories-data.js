import alcoolice from "../assets/home-page/menu-categories/alcoolice.png";
import racoritoare from "../assets/home-page/menu-categories/racoritoare.png";
import espresso from "../assets/home-page/menu-categories/espresso.png";

export const categoriesData = [
  {
    name: "alcoolice",
    image: alcoolice,
    linkTo: "/alcoolice",
    w: 62,
    h: 168,
    types: [
      {
        name: "spirtoase",
      },

      {
        name: "vinuri",
      },

      {
        name: "beri",
      },
    ],
  },

  {
    name: "racoritoare",
    image: racoritoare,
    linkTo: "/racoritoare",
    w: 42,
    h: 145,
    types: [
      {
        name: "apa",
      },

      {
        name: "sucuri",
      },

      {
        name: "energizante",
      },
    ],
  },

  {
    name: "espresso",
    image: espresso,
    linkTo: "/espresso",
    w: 113,
    h: 150,
  },
];
