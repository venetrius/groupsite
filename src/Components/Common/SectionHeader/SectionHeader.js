import React, { Component } from 'react';
import "./SectionHeader.css";
import Button from 'react-bootstrap/Button'

class SectionHeader extends Component {
    render() {
        return (
         <div class="row row-container section-header-container">
            <div class="col section-header-title" > 
                <h4> {this.props.title} </h4> 
            </div>
            <div class="col button-text">
                <Button> {this.props.buttonText} </Button>
            </div>
         </div>      
        );
      }
}

export default SectionHeader;