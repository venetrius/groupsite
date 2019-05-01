import React, { Component } from 'react';
import "./SectionHeader.css";
import QuestionModal from './../Modal/QuestionModal';

class SectionHeader extends Component {
    render() {
        return (
         <div class="row row-container section-header-container">
            <div class="col section-header-title"> 
                <h4> {this.props.title} </h4> 
            </div>
            <div class="col button-text">
                <QuestionModal buttonText = {this.props.buttonText} ></QuestionModal>
            </div>
         </div>      
        );
      }
}

export default SectionHeader;