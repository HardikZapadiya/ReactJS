import { useState } from "react";
const App = () => {
  const [num, setNum] = useState(0);
  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 1);
  };
  const increaseBy5 = () => {
    setNum(num + 5);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increaseBy5}>Increase By 5</button>
    </div>
  );
};
export default App;
