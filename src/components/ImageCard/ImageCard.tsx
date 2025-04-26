import { FC } from "react";
import { Image } from "../../App";

interface ImageCardProps {
  item: Image;
  openModal: (item: Image) => void;
}

const ImageCard = ({ item, openModal }: ImageCardProps) => {
  return (
    <div>
      <img
        onClick={() => openModal(item)}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
