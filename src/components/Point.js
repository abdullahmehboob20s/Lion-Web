const Point = ({ point, textClassName, fontSize = "text-xl" }) => {
  return (
    <div className={`flex items-start space-x-4 ${fontSize}`}>
      <img
        src="images/checkbox-icon.svg"
        className="mt-[.30em] w-[1.2em]"
        alt=""
      />
      <p className={`font-medium ${textClassName}`}>{point}</p>
    </div>
  );
};

export default Point;
