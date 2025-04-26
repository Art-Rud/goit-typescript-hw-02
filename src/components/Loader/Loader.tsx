import { PuffLoader } from "react-spinners";
import style from "./Loader.module.css";
function Loader() {
  return (
    <>
      <PuffLoader className={style.loader} color="white" size={150} />
    </>
  );
}
export default Loader;
