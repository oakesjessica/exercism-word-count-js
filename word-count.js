/**
 * Currently only consider ASCII letters and digits
 *  Pattern does not match hyphenated words as we're only consider simple words and contractions
 * /[A-Za-z']+\b/ => capture any character between word boundaries
 *  Matches simple words, possessive and contractions
 *  IMPORTANT: This pattern assumes there are no single quoted words
 *    TODO: find a REGEX-only way to handle both single-quoted words and contracted words with a leading apostrophe
 *      without false positive results, e.g. 'large, 'here is a bad match
 * /\b[0-9]+\b/ => capture digits only, exclude alphanumeric patterns, e.g. testing123, 123testing, test123test
 * Pattern does not include
**/
const WORD_COUNT_REGEX = /[A-Za-z']+\b|\b[0-9]+\b/gm;
const SINGLE_QUOTED_WORDS_REGEX = /\s+?'([A-Za-z]+)'/gm;

export const countWords = (str) => {
  if ( ! str || str.length === 0) {
    return {};
  }

  const results = {};
  // Replace any quoted words, e.g. 'letters', 'hey, this is a quote'
  // This way, we can capture contractions with leading apostrophes, e.g. 'twas, 'ow
  str = str.replace(SINGLE_QUOTED_WORDS_REGEX, " $1 ");
  str = str.toLowerCase();

  str.match(WORD_COUNT_REGEX).forEach(s => {
    if ( ! Object.prototype.hasOwnProperty.call(results, s)) results[s] = 0;
    results[s]++;
  });

  return results;
};
