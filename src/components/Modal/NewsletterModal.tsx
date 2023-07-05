import { CheckCircle, X } from "phosphor-react";
import Modal from ".";

interface INewsletterModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export function NewsletterModal({
  isOpen,
  handleCloseModal,
}: INewsletterModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <header className="bg-black px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CheckCircle size={32} weight="light" className="text-yellow" />
          <h1 className="text-white text-xl font-medium">
            E-mail cadastrado com sucesso
          </h1>
        </div>
        <X
          size={24}
          weight="bold"
          className="text-gray cursor-pointer hover:opacity-70 duration-300"
          onClick={handleCloseModal}
        />
      </header>
      <main>
        <div className="mx-4 mt-4">
          <p className="text-font-primary leading-6">Em breve você receberá novidades exclusivas da Meteora.</p>
        </div>
      </main>
    </Modal>
  );
}
