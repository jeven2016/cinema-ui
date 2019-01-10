/**
 * Scroll window to the position
 * @param x
 * @param y
 */
export function scrollTo(x = 0, y = 0) {
  window.scroll(0, 0);
}

/**
 * Check the value is valid integer
 * @param value
 * @returns {boolean}
 */
export const isValidInteger = (value) => {
  return /^\d{1,6}$/.test(value);
};