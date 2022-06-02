export const randomInteger = (min = 0, max = 42) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

/**
 * @param {Number} idx - current index
 * @param {Array} [arr=[]] - Target array
 * @returns {Boolean} - True if target array has next item
 */
export const hasNextItem = (idx, arr = []) => {
  if (idx < 0 || !arr.length) {
    return false;
  }

  const nextItem = Boolean(arr[idx + 1]);

  return nextItem;
};
