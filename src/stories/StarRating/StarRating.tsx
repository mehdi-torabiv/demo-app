/**
 * StarRating displays a star-based rating.
 *
 * @component
 * @example
 * <StarRating rating={4.5} textSize="lg" maxRating={5} />
 */

export interface StarRatingProps {
  rating: number;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  maxRating?: number;
}

const StarRating = ({
  rating,
  textSize = "sm",
  maxRating = 5,
}: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.floor(rating) !== rating ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStars;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} type="full" textSize={textSize} />
      ))}
      {halfStars > 0 && <Star key="half" type="half" textSize={textSize} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} type="empty" textSize={textSize} />
      ))}
    </div>
  );
};

const Star = ({
  type,
  textSize,
}: {
  type: "full" | "half" | "empty";
  textSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}) => {
  const classNames = {
    full: "text-yellow-500",
    half: "text-yellow-500",
    empty: "text-gray-300",
  };

  return <span className={`${classNames[type]} text-${textSize}`}>★</span>;
};

export default StarRating;
