import React from "react";

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.floor(rating) !== rating ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStars;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} type="full" />
      ))}
      {halfStars > 0 && <Star key="half" type="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} type="empty" />
      ))}
    </div>
  );
};

const Star = ({ type }: { type: "full" | "half" | "empty" }) => {
  const classNames = {
    full: "text-yellow-500",
    half: "text-yellow-500",
    empty: "text-gray-300",
  };

  return <span className={`${classNames[type]} text-xs`}>★</span>;
};

export default StarRating;
