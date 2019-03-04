import React from 'react';
import fireResistive from '../images/constructionTypes/fireResistive.png';
import frame from '../images/constructionTypes/frame.png';
import joistedMasonry from '../images/constructionTypes/joistedMasonry.png';
import noncombustible from '../images/constructionTypes/noncombustible.png';

const ConstructionTypesDescription = () => (
  <div className="need-help-modal">
    <h3 className="need-help-modal__title">Construction Types</h3>
    <div className="need-help-modal__item">
      <img
        className="need-help-modal__img"
        src={frame}
        alt="Frame"
      />
    </div>
    <div className="need-help-modal__item">
      <img
        className="need-help-modal__img"
        src={joistedMasonry}
        alt="Joisted Masonry"
      />
    </div>
    <div className="need-help-modal__item">
      <img
        className="need-help-modal__img"
        src={noncombustible}
        alt="Non-combustible"
      />
    </div>
    <div className="need-help-modal__item">
      <img
        className="need-help-modal__img"
        src={fireResistive}
        alt="Fire Resistive"
      />
    </div>
  </div>
);

export default ConstructionTypesDescription;
