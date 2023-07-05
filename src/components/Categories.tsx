import { useEffect, useState, useCallback } from "react";
import bolsa from "../assets/Desktop/Categorias/Categoria bolsa.png";
import calça from "../assets/Desktop/Categorias/Categoria calça.png";
import calçados from "../assets/Desktop/Categorias/Categoria calçados.png";
import camisetas from "../assets/Desktop/Categorias/Categoria camiseta.png";
import casacos from "../assets/Desktop/Categorias/Categoria casacos.png";
import oculos from "../assets/Desktop/Categorias/Categoria óculos.png";
import { api } from "../services/api";
import { ICategoriesOptions } from "../pages/Home";

interface ICategory {
  id: number;
  name: string;
}

interface ICategoriesProps {
  categorySelected: ICategoriesOptions;
  setCategorySelected: React.Dispatch<React.SetStateAction<ICategoriesOptions>>;
}

export function Categories({
  categorySelected,
  setCategorySelected,
}: ICategoriesProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const fetchCategories = useCallback(async () => {
    const { data } = await api.get<ICategory[]>("/categories");

    setCategories(data);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <section className="sm:mx-20 mx-6 text-center flex flex-col gap-8 mt-16">
      <h1 className="sm:text-3xl text-2xl font-medium font-sans text-font-primary">
        Busque por categoria
      </h1>
      <div className="lg:flex grid sm:grid-cols-3 xs:grid-cols-2  gap-4 lg:w-auto w-max lg:mx-0 mx-auto">
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            onClick={() => {
              if (category.name === categorySelected)
                return setCategorySelected(null);
              setCategorySelected(category.name as ICategoriesOptions);
            }}
            isSelected={categorySelected === category.name}
          />
        ))}
      </div>
    </section>
  );
}

interface ICategoryItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  category: ICategory;
  isSelected: boolean;
}

function CategoryItem({ category, isSelected, ...rest }: ICategoryItemProps) {
  function getImage() {
    switch (category.name) {
      case "Camisetas":
        return camisetas;
      case "Bolsas":
        return bolsa;
      case "Calçados":
        return calçados;
      case "Calças":
        return calça;
      case "Casacos":
        return casacos;
      case "Óculos":
        return oculos;
      default:
        return "";
    }
  }

  return (
    <button
      className={`flex flex-col items-center w-40 hover:brightness-75 duration-300 cursor-pointer ${
        isSelected && "brightness-50"
      }`}
      {...rest}
    >
      <img src={getImage()} alt="" />
      <p className="bg-black w-full text-white text-center py-1">
        {category.name}
      </p>
    </button>
  );
}
