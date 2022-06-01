export const ANSWER_NUMBER = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

const HtmlLatina = {
  '&iacute;': 'í',
  '&oacute;': 'ó',
};

export const keyPressHandler = (event) => {};

/**
 * @param {String} input - question title with unicode
 * @returns {String} - question title parsed unicode
 */
export const converUnicode = (input) => input.replace(/&[a-z]{1,};/g, (a) => HtmlLatina[a]);
