function Carts(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.link} alt="Profile_image" />
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button> New Profile </button>
    </div>
  );
}

export default Carts;
