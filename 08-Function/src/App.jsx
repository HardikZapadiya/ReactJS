const App = () => {
  function btnClicked() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={btnClicked}>Click me!</button>
      <button
        onDoubleClick={() => {
          console.log("double clicked!!!");
        }}
      >
        Double Click
      </button>
    </div>
  );
};
export default App;
