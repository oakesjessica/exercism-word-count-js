//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const WORD_COUNT_REGEX = /[0-9A-Za-z]+/gm;

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
