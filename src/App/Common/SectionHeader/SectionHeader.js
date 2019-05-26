import React from 'react';
import './SectionHeader.css';
import QuestionModal from './../Modal/QuestionModal';

function SectionHeader({ title, buttonText }) {
  return (
    <div className="row row-container section-header-container">
      <div className="col section-header-title">
        <h4> {title} </h4>
      </div>
      <div className="col button-text">
        <QuestionModal buttonText={buttonText} />
      </div>
    </div>
  );
}

export default SectionHeader;
