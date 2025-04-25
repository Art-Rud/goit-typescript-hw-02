import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(event.target.elements.search.value);
    if (event.target.elements.search.value === "") {
      toast.error("Please enter your request");
    }
    event.target.elements.search.value = "";
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
}
export default SearchBar;
