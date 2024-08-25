export const splitString = (input) => {
  const charecter = [];
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(input)) !== null) {
    charecter.push(match[0]);
  }
  return charecter;
}
