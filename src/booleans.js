export const negate = (a) => {
  // your code here
  return (!a)
};

export const both = (a, b) => {
  // your code here
  return (a && b)
};

export const either = (a, b) => {
  // your code here
  return ( a || b)
};

export const none = (a, b) => {
  // your code here
  return !( a || b )
};

export const one = (a, b) => {
  // your code here
  return (a != b)
};

export const truthiness = (a) => {
  // your code here
  return (a)
};

export const isEqual = (a, b) => {
  // your code here
  return ( a === b )
};

export const isGreaterThan = (a, b) => {
  // your code here
  return ( a > b )
};

export const isLessThanOrEqualTo = (a, b) => {
  // your code here
  return ( a <= b )
};

export const isOdd = (a) => {
  // your code here
  return (a % 2) == 1;
};

export const isEven = (a) => {
  // your code here
  return (a % 2) == 0;
}; 

export const isSquare = (a) => {
  // your code here
  return Math.sqrt(a) % 1 === 0;
};

export const startsWith = (char, string) => {
  // your code here
 return string.charAt (0)
=== char 
};

export const containsVowels = (string) => {
  // your code here
  return ['a', 'e', 'i', 'o', 'u'].indexOf(string).toLowerCase()
};

export const isLowerCase = (string) => {
  // your code here
  return string.toLowerCase() === string;
};
