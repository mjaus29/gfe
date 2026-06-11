const ArrowIcon = ({
  width,
  height,
  fill,
  className,
}: {
  width: string;
  height: string;
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.143 5.64852L5.673 1.17851L6.8515 0L13.3333 6.48185L6.8515 12.9636L5.673 11.7851L10.143 7.31518H0V5.64852H10.143Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ArrowIcon;
