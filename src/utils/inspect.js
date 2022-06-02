/**
 * @param {*} obj - Any passed type
 * @returns {Boolean} True if passed expected type Object
 */
export const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
