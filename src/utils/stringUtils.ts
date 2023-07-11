/**
 * Capitalize the first letter of a string
 * @param string
 * @returns the string with the first letter capitalized
 */
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
