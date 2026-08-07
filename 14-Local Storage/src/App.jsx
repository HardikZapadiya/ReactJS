function App() {
  //store data in key-value pairs
  localStorage.setItem("name", "hardik");
  localStorage.setItem("age", 20);

  //get data
  const user = localStorage.getItem("name");
  console.log(user);

  //remove one selected item
  localStorage.removeItem("name");

  //remove all items
  localStorage.clear();

  //store multiple data in object/array
  const data = [
    { title: "react", details: "Learn Hooks" },
    { title: "DSA", details: "Learn Array" },
  ];
  localStorage.setItem("data", JSON.stringify(data));

  const dataItems = JSON.parse(localStorage.getItem("data"));

  console.log(dataItems);
  return <div>App</div>;
}

export default App;
