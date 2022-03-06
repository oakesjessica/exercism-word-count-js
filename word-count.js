/**
 * Currently only consider ASCII letters and digits
 * /\b[A-Za-z+'A-Za-z]+\b/ => capture any character between word boundaries
 *  Matches simple words, possessive and contractions *but*
 *    currently drops the apostrophe with contracts like 'ow, and 'twas. It matches "ow" and "twas"
 * /\b[0-9]+\b/ => capture digits only, exclude alphanumeric patterns, e.g. testing123, 123testing, test123test
 *
**/
const WORD_COUNT_REGEX = /\b[A-Za-z+'A-Za-z]+\b|\b[0-9]+\b/gm;

export const countWords = (str) => {
  if ( ! str || str.length === 0) {
    return {};
  }

  const results = {};
  str = str.toLowerCase();

  str.match(WORD_COUNT_REGEX).forEach(s => {
    if ( ! Object.prototype.hasOwnProperty.call(results, s)) results[s] = 0;
    results[s]++;
  });

  return results;
};
