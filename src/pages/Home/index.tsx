import { CarouselComponent } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { Categories } from "../../components/Categories";

import { Facilities } from "../../components/Facilities";
import { Products } from "../../components/Products";
import { Newsletter } from "../../components/Newsletter";
import { useState } from "react";

export type ICategoriesOptions =
  | "Camisetas"
  | "Bolsas"
  | "Calçados"
  | "Calças"
  | "Casacos"
  | "Óculos"
  | null;

export function Home() {
  const [categorySelected, setCategorySelected] =
    useState<ICategoriesOptions>(null);
  const [filteredInput, setFilteredInput] = useState("");
  return (
    <>
      <Header setFilteredInput={setFilteredInput} />
      <main>
        <CarouselComponent />
        <Categories
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <Products
          categorySelected={categorySelected}
          filteredInput={filteredInput}
        />
        <Facilities />
        <Newsletter />
      </main>
      <footer className="bg-black py-4 flex items-center justify-center">
        <p className="text-white text-xs leading-5 text-center sm:mx-0 mx-5">
          2023 © Desenvolvido por{" "}
          <a
            href="https://github.com/glsvitoria"
            target="_blank"
            className="text-yellow hover:underline duration-300"
          >
            Glsvitoria
          </a>{" "}
          no Challenge FrontEnd da Alura | Projeto fictício sem fins comerciais.
        </p>
      </footer>
    </>
  );
}
