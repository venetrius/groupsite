import React, { Component } from 'react';
import GET_png from './resources/FttService_GET.png';
import POST_png from './resources/FttService_POST.JPG';

class FttSShowCase extends React.Component {
    render(){
        return(
        <div className="container" id="service">
            <details open>
                <summary class="projectSummary">Five-Times Thirty Service</summary>
                <br/><br/>
                <details open>
                    <summary class="detailSummary">Summary</summary>
                    <p>
                    Web service for the game Five-Times Thirty. It provides the moves of the Ai through GET request,
                     and accept game history in POST requests. The goal is to use the collected data to provide optimal moves.</p>
                </details>
                <br/>
                <details>
                <summary class="detailSummary">technologies</summary> 
                <div class="techDetails">                               
                    <span>Java 8</span>
                    <span>Test Driven Development</span>
                    <span>Maven</span>
                    <span>Sping Boot</span>
                    <span>MySQL</span>
                      <span>DigitalOcean</span>
                      <span>Ubuntu 18.10</span>
                      <span>REST API</span>
                      </div>
                </details>
                <br/>
                <details> <summary class="detailSummary">supported methods (for now)</summary><br/>
                <h6>GET bet request requires the state of the game, returns the ai 'bet'</h6>
                <img src={GET_png} alt="logo"></img>
                <br/>
                <h6>POST bet request requires the game final state, returns true if the resource has been posted</h6>
                <img src={POST_png} alt="logo"></img>
                </details>
            </details>

        </div>
        
        
        );
    }

}

export default FttSShowCase;