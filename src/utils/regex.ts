export const Regex = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.[A-Za-z]{2,3}(?<!\.12))+$/,
  space: /(?:\r\n|\r|\n|\s)/g,
  onlyAlphabetCharacters: /^[A-Za-z]+$/,
  onlyNumberCharacters: /^-?\d+(\.\d+)?$/,
  specialCharacters: /^[a-zA-Z ]*$/,
  lessThan31: /^(?:[0-9]|[1-2][0-9]|3[0-1])$/,
};
