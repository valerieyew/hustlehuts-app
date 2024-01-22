const Minus = (props: React.SVGAttributes<SVGElement>) => {
  const { width = "9", height = "1", fill = "currentColor", ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <line
        x1="0.5"
        y1="0.5"
        x2="8.5"
        y2="0.500001"
        stroke={fill}
        strokeLinecap="round"
      />
    </svg>
  );
};
export default Minus;
