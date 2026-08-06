import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const RightContent = (props) => {
  const users = props.users || [];

  return (
    <div
      id="right"
      className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-3/4"
    >
      {users.map(function (ele, idx) {
        return (
          <RightCard
            key={idx}
            color={ele.color}
            id={idx}
            intro ={ele.intro}
            img={ele.img}
            tag={ele.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
