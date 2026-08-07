import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className="loading">Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => <Card key={idx} elem={elem} />);
  }

  return (
    <div className="app">
      <div className="card-container">{printUserData}</div>

      <div className="pagination">
        <button
          disabled={index === 1}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>

        <h4>Page {index}</h4>

        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
