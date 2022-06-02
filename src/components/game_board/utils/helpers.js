export const ANSWER_NUMBER = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

const HtmlSymbols = {
  '&iacute;': 'í',
  '&oacute;': 'ó',
  '&#039;': "'",
};

// FIXME: add keyBoard event
// export const keyPressHandler = (event) => {};

/**
 * @param {String} input - question title with unicode
 * @returns {String} - question title parsed unicode
 */
export const converUnicode = (input) => input.replace(/&[a-z#0-9]{1,};/g, (a) => HtmlSymbols[a]);
