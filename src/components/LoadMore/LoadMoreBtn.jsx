const style = {
  marginBottom: 50,
  marginTop: 20,
};
function LoadMoreBtn({ load }) {
  return (
    <>
      <button onClick={load} style={style}>
        Load More
      </button>
    </>
  );
}
export default LoadMoreBtn;
