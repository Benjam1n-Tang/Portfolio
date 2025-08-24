type SkillsProps = {
  name: string;
  icon: string;
};

const SkillsCard = (props: SkillsProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <img src={props.icon} alt={props.name} className="w-30 h-30" />
      <h4 className="text-neutral-900 tracking-tighter sm:text-3xl text-2xl font-inter font-light">
        {" "}
        {props.name}{" "}
      </h4>
    </div>
  );
};

export default SkillsCard;
