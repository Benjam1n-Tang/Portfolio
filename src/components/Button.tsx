import { useState } from "react";

type ButtonProps = {
  text: string;
  iconUrl?: string;
  hoverIconUrl?: string;
  outline: boolean;
  paddingX?: string;
  paddingY?: string;
  width?: string;
  height?: string;
  radius: string;
  feature?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      type={props.type} 
      onClick={props.onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`
        ${props.width} ${props.height} ${props.paddingX} ${props.paddingY} ${
          props.radius
        } ${props.feature}

        ${
          props.outline
            ? `text-secondary-200 border-1`
            : `bg-secondary-200 text-neutral-900 `
        }
        hover:scale-104 hover:text-neutral-900 duration-300 cursor-pointer hover:bg-secondary-300 flex justify-center items-center gap-2`}
    >
      {props.iconUrl && (
        <img
          src={isHover ? props.hoverIconUrl : props.iconUrl}
          alt="Button"
          className="w-8 h-8"
        />
      )}

      <div className="font-semibold font-inter tracking-normal text-base text-nowrap">
        {" "}
        {props.text}{" "}
      </div>
    </button>
  );
};

export default Button;
