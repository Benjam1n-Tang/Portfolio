type DotProps = {
  active: boolean;
  green: boolean;
  onClick: () => void;
};

const DotNavigator = (props: DotProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`h-3 w-3 sm:h-3 hover:cursor-pointer sm:w-3 
      ${
        props.active
          ? `${
              props.green
                ? `bg-secondary-200 hover:bg-secondary-200`
                : `bg-primary-600 hover:bg-primary-600`
            }`
          : `${
              props.green
                ? `bg-secondary-50 hover:bg-secondary-200`
                : `bg-primary-300 hover:bg-primary-600`
            }`
      } 
      
    
    
    rounded-full`}
    />
  );
};

export default DotNavigator;
