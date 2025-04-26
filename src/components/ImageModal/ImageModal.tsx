import Modal from "react-modal";
import style from "./ImageModal.module.css";
import { IoClose } from "react-icons/io5";
import { Image } from "../../App";
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    backgroundColor: "black",
  },
};
Modal.setAppElement("#root");
interface ImageModalProps {
  image: Image | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}
const ImageModal = ({ image, modalIsOpen, closeModal }: ImageModalProps) => {
  return (
    <div className={style.wrapper}>
      {image && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
        >
          <button className={style.btn} onClick={closeModal}>
            <IoClose size={30} className={style.icon} />
          </button>
          <div className={style.wrapper}>
            <img
              className={style.img}
              src={image.urls.regular}
              alt={image.alt_description}
            />
            <div>
              <p>Likes : {image.likes}</p>
              {image.description && (
                <p className={style.desc}>{image.description.toUpperCase()}</p>
              )}
              <p className={style.desc}>
                {image.alt_description.toUpperCase()}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ImageModal;
