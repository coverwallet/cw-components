const escapeSpecialCharacters = str => str.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');

export default escapeSpecialCharacters;
