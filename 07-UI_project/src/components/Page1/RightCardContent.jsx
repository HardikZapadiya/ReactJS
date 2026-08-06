const RightCardContent = (props) => {
  console.log(props.color);

  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h2>

      <div>
        <p className="text-xl leading-relaxed text-white mb-5 [text-shadow:2px_2px_5px_black]">
          {props.intro}
        </p>

        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>

          <button className="text-white font-medium px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
