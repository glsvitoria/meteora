import ReactModal, { Props as ModalProps } from "react-modal";

ReactModal.setAppElement("#root");

export default function Modal({ children, ...rest }: ModalProps) {
  return (
    <ReactModal
      className="m-2 w-full max-w-[640px] rounded-lg bg-white pb-6 outline-0 md:m-8"
      overlayClassName="fixed inset-0 z-20 flex items-center justify-center bg-stone-900 bg-opacity-75"
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      {...rest}
    >
      {children}
    </ReactModal>
  );
}
