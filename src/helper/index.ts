export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Truncate the text to the maximum length and add an ellipsis
  return text.substring(0, maxLength) + "...";
}

export function calculateOriginalPrice(
  discountedPrice: number,
  discountPercentage: number
): number {
  if (
    discountPercentage &&
    discountPercentage > 0 &&
    discountPercentage < 100
  ) {
    // Calculate the original price based on the discounted price and discount percentage
    return discountedPrice / (1 - discountPercentage / 100);
  } else {
    // If there's no valid discount percentage, return the original price as is
    return discountedPrice;
  }
}
