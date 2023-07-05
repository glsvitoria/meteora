import { useState, useCallback, useEffect } from "react";

import bolsa from "../assets/Desktop/Imagens Cards/Bolsa.png";
import calca from "../assets/Desktop/Imagens Cards/Calça.png";
import camiseta from "../assets/Desktop/Imagens Cards/Camiseta.png";
import jaqueta from "../assets/Desktop/Imagens Cards/Jaqueta.png";
import oculos from "../assets/Desktop/Imagens Cards/Óculos.png";
import tenis from "../assets/Desktop/Imagens Cards/Tenis.png";
import formatNumber from "../utils/formatNumber";
import { ProductModal } from "./Modal/ProductModal";
import { api } from "../services/api";
import { ICategoriesOptions } from "../pages/Home";
import { XCircle } from "phosphor-react";

export interface IProduct {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category: ICategoriesOptions;
}

const colorsOptions = ["Azul claro", "Offwhite", "Preto"];
const sizesOptions = ["P", "PP", "M", "G", "GG"];

interface IProductsProps {
  categorySelected: ICategoriesOptions;
  filteredInput: string;
}

export function Products({ categorySelected, filteredInput }: IProductsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleOpenModal = useCallback((product: IProduct) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }, []);

  const getProducts = useCallback(async () => {
    const { data } = await api.get(`/products?name=${filteredInput}`);

    setProducts(data);
  }, [filteredInput]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (categorySelected) {
      const filteredProducts = products.filter(
        product => product.category === categorySelected,
      );
      setProductsFiltered(filteredProducts);
    } else {
      setProductsFiltered(products);
    }
  }, [categorySelected, products]);

  return (
    <>
      <section className="sm:mx-20 mx-6 text-center flex flex-col gap-8 mt-16">
        <h1 className="sm:text-3xl text-2xl font-medium font-sans text-font-primary">
          {productsFiltered.length === 0 ? (
            <span className="font-bold flex flex-col items-center gap-4">
              Nenhum produto encontrado{" "}
              <XCircle size={64} weight="light" className="opacity-25" />
            </span>
          ) : (
            "Produtos que estão bombando"
          )}
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {productsFiltered.map(product => (
            <Product
              key={product.id}
              product={product}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </section>
      <ProductModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        colorsOptions={colorsOptions}
        sizesOptions={sizesOptions}
        selectedProduct={selectedProduct}
      />
    </>
  );
}

interface IProductProps {
  product: IProduct;
  handleOpenModal: (product: IProduct) => void;
}

function Product({ product, handleOpenModal }: IProductProps) {
  function getImage() {
    switch (product.name) {
      case "Camiseta Conforto":
        return camiseta;
      case "Calça Alfaiataria":
        return calca;
      case "Tênis Chunky":
        return tenis;
      case "Jaqueta Jeans":
        return jaqueta;
      case "Óculos Redondo":
        return oculos;
      case "Bolsa coringa":
        return bolsa;
      default:
        return "";
    }
  }

  return (
    <div className="flex flex-col gap-4 border border-black/10 rounded-lg">
      <img src={getImage()} alt="" />
      <div className="flex flex-col px-4 gap-2 mb-4">
        <h3 className="font-bold text-font-primary w-max">{product.name}</h3>
        <p className="text-xs text-font-primary text-justify leading-6">
          {product.description}
        </p>
        <p className="font-bold text-font-primary text-left">
          {formatNumber({ data: product.price / 100, type: "currency" })}
        </p>
        <button
          className="bg-purple w-max px-4 py-2 text-white font-medium rounded-lg cursor-pointer hover:opacity-70 duration-300"
          onClick={() => handleOpenModal(product)}
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}
