const Card = ({ elem }) => {
  return (
    <div className="card">
      <a href={elem.url} target="_blank" rel="noreferrer">
        <img src={elem.download_url} alt={elem.author} />

        <div className="card-content">
          <h2>{elem.author}</h2>
          <p>View Image ↗</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
