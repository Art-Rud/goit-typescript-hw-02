import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
function ImageGallery({ list, openModal }) {
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
}
export default ImageGallery;
