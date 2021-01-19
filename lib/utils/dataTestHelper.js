export default (value) => {
  const replaceChars = {
    ",": "",
    "& ": "",
    "\\": "",
    "/": "",
    "(": "",
    ")": "",
    "'": "",
    " ": "-",
  };
  return String(value)
    .replace(/,|& |\(|\)|\\|\/|'| /g, (match) => replaceChars[match])
    .toLowerCase();
};
