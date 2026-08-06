import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  console.log(props.color);

  return (
    <div className="h-full shrink-0 overflow-hidden relative w-70 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="Nothings...." />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} intro ={props.intro} />
    </div>
  );
};

export default RightCard;
