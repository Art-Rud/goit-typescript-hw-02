import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhoto from "./request";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMore/LoadMoreBtn";
export interface Image {
  id: string;
  description?: string;
  alt_description: string;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
}

function App() {
  const [list, SetList] = useState<Image[]>([]);
  const [search, SetSearch] = useState("");
  const [loader, SetLoader] = useState(false);
  const [err, SetErr] = useState(false);
  const [page, SetPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, SetCurrentImage] = useState<Image | null>(null);
  const [more, Setmore] = useState(false);
  const openModal = (item: Image) => {
    setIsOpen(true);
    SetCurrentImage(item);
  };
  const closeModal = () => {
    setIsOpen(false);
    SetCurrentImage(null);
  };
  const onSearch = (text: string) => {
    if (search === text) {
      return;
    }
    SetSearch(text);
    SetPage(1);
    SetList([]);
  };
  const onLoadMore = () => {
    SetPage(page + 1);
  };
  useEffect(() => {
    if (search === "") {
      return;
    }
    async function getPhoto() {
      try {
        SetLoader(true);
        SetErr(false);
        const data = await fetchPhoto(search, page);
        Setmore(data.length === 9);
        console.log(data);

        SetList((prevList) => {
          return [...prevList, ...data];
        });
      } catch (error) {
        SetErr(true);
      } finally {
        SetLoader(false);
      }
    }
    getPhoto();
  }, [search, page]);
  return (
    <>
      <SearchBar onSearch={onSearch} />
      {err && <ErrorMessage />}
      <ImageGallery list={list} openModal={openModal} />
      {more && <LoadMoreBtn load={onLoadMore} />}
      {loader && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={currentImage}
      />
    </>
  );
}

export default App;
