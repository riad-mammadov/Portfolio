function splitString(input) {
  const char = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(input)) !== null) {
    char.push(match[0]);
  }

  return char;
}

export default splitString;
