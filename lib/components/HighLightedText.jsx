import React, { PropTypes } from 'react';

function HighLightedText({ text, selection }) {
  const inputValue = (selection || '').toLocaleLowerCase();
  const startIndex = text.toLocaleLowerCase().indexOf(inputValue);
  const endIndex = startIndex + inputValue.length;
  return (
    <span>
      {text.substring(0, startIndex)}
      <b>
        {text.substring(startIndex, endIndex)}
      </b>
      {text.substring(endIndex, text.length)}
    </span>
  );
}

HighLightedText.propTypes = {
  text: PropTypes.string.isRequired,
  selection: PropTypes.string,
};

export default HighLightedText;
