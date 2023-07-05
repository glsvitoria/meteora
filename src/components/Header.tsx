import { useState } from "react";
import meteoraLogo from "../assets/meteora-logo.svg";
import { DropdownMenuComponent } from "./DropdownMenuComponent";

interface IHeaderProps {
  setFilteredInput: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ setFilteredInput }: IHeaderProps) {
  const [localInput, setLocalInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilteredInput(localInput);
  };
  return (
    <header className="bg-black w-full flex sm:flex-row flex-col md:justify-between font-sans">
      <div className="flex flex-row items-center gap-10 md:w-auto w-full md:justify-start justify-between mr-4 py-4 px-6">
        <img src={meteoraLogo} alt="Logo da Meteora" className="w-32" />
        {window.innerWidth > 768 ? (
          <ul className="flex flex-row text-white gap-10">
            <li className="hover:opacity-70 duration-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:opacity-70 duration-300">
              <a href="#">Nossas lojas</a>
            </li>
            <li className="hover:opacity-70 duration-300">
              <a href="#">Novidades</a>
            </li>
            <li className="hover:opacity-70 duration-300">
              <a href="#">Promoções</a>
            </li>
          </ul>
        ) : (
          <DropdownMenuComponent />
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4 sm:bg-black bg-white py-4 px-6"
      >
        <input
          type="text"
          placeholder="Digite o produto"
          className="sm:h-full h-12 sm:w-40 w-full px-4 rounded-lg focus:outline-primary border-black border sm:border-0"
          value={localInput}
          onChange={event => setLocalInput(event.currentTarget.value)}
        />
        <button
          type="submit"
          className="bg-black border border-white text-white px-3 py-2 rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer"
        >
          Buscar
        </button>
      </form>
    </header>
  );
}
