import { useState, useCallback, FormEvent } from "react";

import { NewsletterModal } from "./Modal/NewsletterModal";

export function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    setIsOpen(true);
  }, []);

  return (
    <>
      <section className="py-10 flex items-center justify-center">
        <div className="border-2 border-black px-10 py-10 md:w-3/5 xs:w-4/5 mx-4">
          <h2 className="xs:text-xl text-center mb-6">
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra? <span className="font-medium">Cadastre-se!</span>
          </h2>

          <form className="md:w-4/5 mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="email" className="invisible h-0 block">
              Digite seu email para receber a newsletter
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-10 xs:w-[calc(100%-80px)] w-full border-2 border-black px-4"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-purple xs:px-4 text-white font-medium cursor-pointer hover:opacity-70 duration-300 h-10 xs:mt-0 mt-4 xs:w-auto w-full text-center"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      <NewsletterModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
}
