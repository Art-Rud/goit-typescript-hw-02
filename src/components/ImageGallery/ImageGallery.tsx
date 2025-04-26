import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
import { Image } from "../../App";
import { FC } from "react";
interface ImageGalleryProps {
  list: Image[];
  openModal: (item: Image) => void;
}
const ImageGallery: FC<ImageGalleryProps> = ({ list, openModal }) => {
  return (
    <>
      <ul className={style.list}>
        {list.map((item) => (
          <li className={style.item} key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
