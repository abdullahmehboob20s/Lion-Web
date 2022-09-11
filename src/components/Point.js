const Point = ({
  point,
  textClassName,
  fontSize = "text-xl",
  iconClassName = "mt-[.28em] min-w-[1em] w-[1em]",
}) => {
  return (
    <div className={`flex items-start space-x-4 ${fontSize}`}>
      <img src="images/checkbox-icon.svg" className={iconClassName} alt="" />
      <p className={`font-medium ${textClassName}`}>{point}</p>
    </div>
  );
};

export default Point;
