const App = () => {
  const submitHandler = (ele) => {
    ele.preventDefault();
    console.log("form Submitted..");
  };
  return (
    <div>
      <form
        onSubmit={(ele) => {
          submitHandler(ele);
        }}
      >
        <input type="text" placeholder="Enter Your Name"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;
