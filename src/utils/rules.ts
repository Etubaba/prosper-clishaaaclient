import { Regex } from './regex';

export const rules = {
  ageMin: [
    {
      required: true,
      message: 'A value must be entered',
      pattern: new RegExp(/^[0-9]+$/),
    },
  ],
  required: [
    {
      required: true,
    },
  ],

  notMoreThan31: [
    {
      pattern: Regex.onlyNumberCharacters,
      message: 'only number are allow',
    },
    {
      pattern: Regex.lessThan31,
      message: 'Number must be less or equal to 31 days',
    },
  ],
  specialCharacter: [
    {
      required: true,
      message: 'The name is required.',
    },

    {
      pattern: Regex.specialCharacters,
      message: 'Special Character are not allowed',
    },
  ],
  email: [
    {
      required: true,
    },
    {
      pattern: Regex.email,
      message: 'Please Enter a valid Email',
    },
  ],
  onlyAlphabetCharacters: [
    {
      required: true,
      pattern: Regex.onlyAlphabetCharacters,
      message: 'Only Alpha are allowed',
    },
  ],
  onlyNumberCharacters: [
    {
      required: false,
      pattern: Regex.onlyNumberCharacters,
      message: 'only number are allowed',
    },
  ],
};
