import style from "./ErrorMessage.module.css";
function ErrorMessage() {
  return (
    <>
      <p className={style.err}>Something went wrong, please try again</p>
    </>
  );
}
export default ErrorMessage;
