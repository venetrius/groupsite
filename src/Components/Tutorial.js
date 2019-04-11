import React, { Component } from 'react';
import Highlight from 'react-highlight';
import SideMenu from './SideMenu';
import StickySideBar from './StickiSideBar';

class Tutorial extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
{/*        var dict = {
            "Why to learn": "why",
            "What is React": "what",
            "Suggested materials": "tutorial"};
*/}
          var dict = [
            ["Why to learn", "why"],
            ["What is React", "what"],
            ["Suggested materials", "tutorial"],
            ["Javascript XML ", "JSX"],
            ["React Components", "tutorial-component"]
          ];
        return(
            <div>
             {/*   <div>a</div>
                <div>a</div>
                
                <SideMenu menuitem={dict}>This is the Sidebar</SideMenu>
            <div class="row row-content">
                <div class="col-3 col-md-2 sidebar">
                    
                </div>
        </div>*/}
            <div class="row row-content">
                <div class="col-3 col-md-2">
                    <SideMenu menuitem={dict}>This is the Sidebar</SideMenu>
                </div>
                <div class="col-9 col-md-10 wSidebar">
                <h1>Tutorial</h1>
                <h2> If you are looking for a way to cach up to the group this might help you</h2>

                <p id="why">
                    <h3>Why do we learn React.js?</h3>
                    <div>Most of us aren't a front end developer. But we felt a need 
                        to learn a modern front end framework.
                    </div>
                </p>
                <p>
                    <h3 id="what" > What is React?</h3>
                    React is a UI library developed by Facebook.
                    To learn more: <br/>
                    <a href="https://www.w3schools.com/whatis/whatis_react.asp">https://www.w3schools.com/whatis/whatis_react.asp </a>
                

                </p>
                <p id="tutorial">List of tutorials
                    <ul>
                        <li><a target="_blank" href="https://reactjs.org/tutorial/tutorial.html"> 
                              'Official' React turorial hands on (Picking up terminology on the way)
                            </a></li>
                        <li><a target="_blank" href="https://www.robinwieruch.de/javascript-fundamentals-react-requirements/#react-arrow-functions">A tutorial with more fundamentals, but without excercises</a></li>
                    </ul>
                </p>

                <h4>There are a few things you should definetly know (from prev. experience / tutorials) to 
                    be able to join or sessions. 
                </h4>
                <p id="JSX">
                    <h4>Javascript XML (JXM)</h4>
                    {example("It provides the ability to write JS code as XML document, it translated into HTML before sending it to  the browser"
,`function foo() {
    return (<div>bar</div>) 
}`                  )}
                </p>
                <p><h4>React Components</h4>
                {example("It provides the ability to write JS code as XML document, which will be translated into HTML before rendering it to the browser"
,`function foo() {
    return (<div>bar</div>) 
}`                 )}           
                </p>
                <p id="tutorial-component">
                <h4>Components and function</h4>
                <h5>In React you can create a lot of things</h5>
                <a href="#why">goto why</a>
                </p>
                </div>
          </div></div>
        )
    }
}

function example(title, toHighlight){
    return(
        <div class="row row-container">
        <div class="col-12 col-md-6">
                {title}
            </div>
            <div class="col-12 col-md-6">
            <Highlight language="javascript">{toHighlight}</Highlight>
            </div>
        </div>
        
    )
}
export default Tutorial