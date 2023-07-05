import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import { Routes } from "./routes/routes";
import { v4 } from "uuid";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/categories", () => [
      {
        id: 1,
        name: "Camisetas",
      },
      {
        id: 2,
        name: "Bolsas",
      },
      {
        id: 3,
        name: "Calçados",
      },
      {
        id: 4,
        name: "Calças",
      },
      {
        id: 5,
        name: "Casacos",
      },
      {
        id: 6,
        name: "Óculos",
      },
    ]);

    this.get("/api/products", (_, res) => {
      const products = [
        {
          id: v4(),
          name: "Camiseta Conforto",
          description:
            "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
          price: 7000,
          category: "Camisetas",
        },
        {
          id: v4(),
          name: "Calça Alfaiataria",
          description:
            "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
          price: 18000,
          category: "Calças",
        },
        {
          id: v4(),
          name: "Tênis Chunky",
          description:
            "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
          price: 25000,
          category: "Calçados",
        },
        {
          id: v4(),
          name: "Jaqueta Jeans",
          description:
            "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
          price: 15000,
          category: "Casacos",
        },
        {
          id: v4(),
          name: "Óculos Redondo",
          description:
            "Armação metálica em grafite com lentes arredondadas. Sem erro!",
          price: 12000,
          category: "Óculos",
        },
        {
          id: v4(),
          name: "Bolsa coringa",
          description:
            "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
          price: 12000,
          category: "Bolsas",
        },
      ];
      if (res.queryParams.name) {
        return products.filter(product =>
          product.name
            .toLowerCase()
            .includes(res.queryParams.name.toLowerCase()),
        );
      } else {
        return products;
      }
    });
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
