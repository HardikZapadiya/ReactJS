import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ name: "", age: "", college: "" });

  const submitHandler = (ele) => {
    ele.preventDefault();
    console.log("Form Submitted");
    console.log("Name:", data.name);
    console.log("Age:", data.age);
    console.log("College:", data.college);
    //reset Form
    setData({ name: "", age: "", college: "" });
  };

  return (
    <div>
      <form
        onSubmit={(ele) => {
          submitHandler(ele);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        ></input>
        <input
          type="number"
          placeholder="Enter Your Age"
          value={data.age}
          onChange={(e) => {
            setData({ ...data, age: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter Your College"
          value={data.college}
          onChange={(e) => {
            setData({ ...data, college: e.target.value });
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;
