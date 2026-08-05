import Cart from "./components/Carts";
function App() {
  return (
    <div className="parent">
      <Cart
        name="Hardik Zapadiya"
        age={18}
        link={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmu-AG5n1kPQ5PkKBOluH1N1o0pJVlxsxfptDDioz5mMx8eFHe_TIpiV8&s=10"
        }
      />
      <Cart
        name="Sameer"
        link={
          "https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVvbnxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <Cart
        name="ABC"
        link={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS846pc1w0vc6e7n7Aa5VlXNtxhPk-PyciPGtoheyuuE6tugHyRPnZTuUBR&s=10"
        }
      />
      <Cart
        name="XYZ"
        link={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FXpBEEqQ3839rvSeesEL-A8Ub4OMfDy6Wm4tjBPbKg&s=10"
        }
      />
    </div>
  );
}

export default App;
