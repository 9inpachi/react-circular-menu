export const joinClasses = (...classNames: (string | boolean)[]) =>
  classNames.filter((className) => className).join(" ");
