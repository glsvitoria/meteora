import { CheckCircle, X } from "phosphor-react";
import Modal from ".";
import { IProduct } from "../Products";
import formatNumber from "../../utils/formatNumber";
import { Checkbox } from "../Checkbox";
import bolsa from "../../assets/Desktop/Imagens Cards/Bolsa.png";
import calca from "../../assets/Desktop/Imagens Cards/Calça.png";
import camiseta from "../../assets/Desktop/Imagens Cards/Camiseta.png";
import jaqueta from "../../assets/Desktop/Imagens Cards/Jaqueta.png";
import oculos from "../../assets/Desktop/Imagens Cards/Óculos.png";
import tenis from "../../assets/Desktop/Imagens Cards/Tenis.png";

interface IProductModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  selectedProduct: IProduct | undefined;
  colorsOptions: string[];
  sizesOptions: string[];
}

export function ProductModal({
  isOpen,
  handleCloseModal,
  selectedProduct,
  colorsOptions,
  sizesOptions,
}: IProductModalProps) {
  function getImage() {
    switch (selectedProduct?.name) {
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
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <header className="bg-black px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CheckCircle size={32} weight="light" className="text-yellow" />
          <h1 className="text-white text-xl font-medium">
            Confira detalhes sobre o produto
          </h1>
        </div>
        <X
          size={24}
          weight="bold"
          className="text-gray cursor-pointer hover:opacity-70 duration-300"
          onClick={handleCloseModal}
        />
      </header>
      <main className="p-4 flex xs:flex-row flex-col gap-4">
        <div className="xs:w-3/5 w-2/5 xs:mx-0 mx-auto">
          <img src={getImage()} alt="" />
        </div>
        <div className="xs:w-2/5 xs:flex flex-col gap-4 grid grid-cols-2">
          <div className="flex flex-col gap-6 border-b-2 pb-4 border-zinc-300">
            <h2 className="text-font-primary font-bold">
              {selectedProduct?.name}
            </h2>
            <p className="text-font-primary text-xs">
              {selectedProduct?.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 border-b-2 pb-4 border-zinc-300">
            <p className="text-xl font-medium">
              {selectedProduct?.price &&
                formatNumber({
                  data: selectedProduct?.price / 100,
                  type: "currency",
                })}
            </p>
            <p className="text-zinc-400 text-xs">
              Vendido e entregue por Riachuelo
            </p>
          </div>
          <div className="flex flex-col gap-4 border-b-2 pb-4 border-zinc-300 col-span-2 w-full">
            <h3 className="text-font-primary font-bold text-sm">Cores:</h3>
            <Checkbox labels={colorsOptions} />
          </div>
          <div className="flex flex-col gap-4 border-b-2 pb-4 border-zinc-300  col-span-2 w-full">
            <h3 className="text-font-primary font-bold text-sm">Tamanho:</h3>
            <Checkbox labels={sizesOptions} />
          </div>
          <button className="bg-purple text-white mr-auto px-4 py-2 cursor-pointer hover:opacity-70 duration-300">
            Adicionar à sacola
          </button>
        </div>
      </main>
    </Modal>
  );
}
