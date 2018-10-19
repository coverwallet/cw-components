const escapeSpecialCharacters = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

export default escapeSpecialCharacters;
