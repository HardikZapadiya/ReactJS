import { useState } from "react";
function App() {
  const [user, setUser] = useState({ name: "hardik", age: 21 });
  const [arr, setArr] = useState([10, 20, 30]);

  const handledData = () => {
    const newNum = { ...user };
    newNum.age = user.age + 1;
    console.log(newNum);
    setUser(newNum);
  };
  const handledArray = () => {
    const newArr = [...arr];
    newArr.push(40);
    console.log(newArr);
    setArr(newArr);
  };
  return (
    <div>
      <h1>
        selected Data {user.name} & {user.age}
        <br></br>
        Array : {arr}
      </h1>
      <button onClick={handledData} onDoubleClick={handledArray}>
        Click Me!!
      </button>
    </div>
  );
}

export default App;
