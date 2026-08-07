import { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Users :</h1>
      {user.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

export default App;
