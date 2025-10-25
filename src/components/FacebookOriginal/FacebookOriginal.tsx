interface FacebookOriginalProps {
  className?: string;
  facebookOriginal?: string;
}

export const FacebookOriginal = ({
  className = "",
  facebookOriginal = "https://via.placeholder.com/100x100/13ef96/000000?text=IMG",
}: FacebookOriginalProps): JSX.Element => {
  return (
    <img
      className={`absolute top-0 left-0 w-16 h-16 ${className}`}
      alt="Facebook original"
      src={facebookOriginal}
    />
  );
};