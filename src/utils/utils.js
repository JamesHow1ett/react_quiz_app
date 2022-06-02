import { isObject } from './inspect';

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

export const getSearchParams = (params) => {
  const searchParams = new URLSearchParams();

  if (!isObject(params)) {
    return searchParams;
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, value);
    }
  });

  return searchParams;
};

export const returnCorrectValue = (value) => {
  if (typeof value === 'string' && value === '') {
    return '';
  }

  const isNaN = Number.isNaN(Number(value));

  return isNaN ? value : Number(value);
};

export const createStoregeKey = ({ category, difficulty }) => `c-${category}_d-${difficulty}`;
