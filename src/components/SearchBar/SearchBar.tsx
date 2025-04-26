import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import { FC, FormEvent } from "react";

interface searchBarProps {
  onSearch: (text: string) => void;
}
const SearchBar: FC<searchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    console.log(event);
    let input = (event.target as HTMLFormElement).elements.namedItem(
      "search"
    ) as HTMLInputElement;
    event.preventDefault();
    if (input.value === "") {
      toast.error("Please enter your request");
    }
    onSearch(input.value);

    input.value = "";
  };

  return (
    <>
      <header>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={style.btn} type="submit">
            <IoSearch />
          </button>
        </form>
      </header>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "toast",
          duration: 3000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
            marginRight: 100,
            paddingBlock: 20,
            paddingLeft: 30,
            paddingRight: 30,
            border: "1px solid #fff",
            fontSize: 20,
          },
        }}
      />
    </>
  );
};
export default SearchBar;
