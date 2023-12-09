export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Truncate the text to the maximum length and add an ellipsis
  return text.substring(0, maxLength) + "...";
}
