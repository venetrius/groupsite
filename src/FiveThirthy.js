import React, { Component } from 'react';
import logo from './logo.png';
import './FiveThirthy.css'

function Square (props) {
    if(props.max < props.value){
        return (
            <button 
              className="square"
            >
              {props.value}
            </button>
          );
    }
    return (
      <button 
        onClick={props.onClick} 
        className="square activeSquare"
      >
        {props.value}
      </button>
    );
  }

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square max={this.props.max}
                value={i}
                onClick={() => this.props.onClick(i)} 
            />
        );
    }
  
    render() {
      return (
        <div class="gameboard">
          <div className="board-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
          </div>
          <div className="board-row">
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
          <div className="board-row">
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
          </div>
          <div className="board-row">
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
          </div>
          <div className="board-row">
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
          </div>
        </div>
      );
      }
  }

  class Game extends React.Component {
    constructor(props) {
      super (props);
      this.state = {
        stepNumber: 1,
        sum: 0,
        pointAI: 0,
        pointP: 0,
        isEnd: false
      };
    }
  
    evaluateBets(a, b){
        if(a > b){
            return 1; 
        }else if(a < b){
            return 0;
        }
        return 0.5;
    }

    handleClick(i) {
      if(this.state.stepNumber > 5){
          return;
      }
      const aIbet = 6;
      const pGain = this.evaluateBets(i, aIbet);
      this.setState({
        stepNumber: this.state.stepNumber + 1,
        sum: this.state.sum + i,
        pointAI: this.state.pointAI + 1 - pGain,
        pointP: this.state.pointP + pGain
      });
    }

    getMax(){
        return 30 - this.state.sum - 5 + this.state.stepNumber;
    }

    render() {
  

      return (
        <div>
            <div className="container" id="game">
              <div class="row row-content">
                <div className="game-board col-12 col-sm-4 rm-6">
                  <Board max={this.getMax()} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info  col-12 col-sm-4">
                  <div>{this.state.stepNumber} <span>{this.state.pointP}</span> <span>{this.state.pointAI}</span></div>
                </div>
              </div>
          </div>
        </div>
      );
    }
  }
  
class FiveThirthy extends React.Component {

    render(){
        return(
            <div>
                <Game/>
            </div>
        );
    }

}

export default FiveThirthy;