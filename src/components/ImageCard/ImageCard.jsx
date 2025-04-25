function ImageCard({ item, openModal }) {
  return (
    <div>
      <img
        onClick={() => openModal(item)}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}

export default ImageCard;
