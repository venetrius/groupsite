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

class History extends React.Component{

  createTable(){
    let table = [];
    for (let i = 0; i < this.props.history.length; i+= 2) {
      table.push(<li>{this.props.history[i]} <span>-</span> {this.props.history[i+1]}</li>);
    }
    return table;
  }

  render(){return(
     <div>
       <h6>history</h6>
       <ol className="history" >
       {this.createTable()}
       </ol>    
     </div>
  );}

}


class Game extends React.Component {

    constructor(props) {
      super (props);
      //this.URI = "http://165.227.40.75/bet?state=";  //for server
      this.URI = "http://localhost:8080/bet?state=";    //for local usage
      this.state = {
        stepNumber: 1,
        sum: 0,
        pointAI: 0,
        pointP: 0,
        isEnd: false,
        history: [],
        token: "",
        pBet: -1
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

  postGame() {
    console.log("Posting to" + this.URI+this.state.token);
    fetch(this.URI + this.state.token, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
     /* body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })*/
    });
  }

    fetchBet(request, callback){
      console.log(request);
      return (fetch(request)
        .then(function(response)
         {
        return response.json();
        })
        .then(function(myJson)
         {
          console.log(myJson);
          var aiBet = myJson.bet;
          console.log("bet" + aiBet);
          callback(aiBet);
         }));
    }

    handleClick(i) {
      if (this.state.stepNumber > 5) {
        return;
      }
      this.setState({
        stepNumber: this.state.stepNumber,
        sum: this.state.sum,
        pointAI: this.state.pointAI,
        pointP: this.state.pointP,
        history: this.state.history,
        pBet: i 
      });
      this.fetchBet(this.getGET(), (aiBet) => this.getRoundResult(aiBet));
    }

    getRoundResult(aIbet){
      console.log("aibet: " + aIbet);
      var i = this.state.pBet;
      let hist = this.state.history;
      hist.push(i);
      hist.push(aIbet);
      const pGain = i > aIbet ? 1 : (i < aIbet ? 0 : 0.5);
        this.setState({
          stepNumber: this.state.stepNumber + 1,
          sum: this.state.sum + i,
          pointAI: this.state.pointAI + 1 - pGain,
          pointP: this.state.pointP + pGain,
          history: hist,
          token: this.state.token+ "_" + aIbet + "_" + i,
          pBet : -1
        });
        if(this.state.stepNumber > 5){
            this.postGame();
        }
    }

    getMax(){
        return 30 - this.state.sum - 5 + this.state.stepNumber;
    }

    restartGame(){
      this.setState({
        stepNumber: 1,
        sum: 0,
        pointAI: 0,
        pointP: 0,
        isEnd: false,
        history: [],
        token: "",
        pBet: -1,
      });
    }

    getGET(){
      return this.URI + this.state.stepNumber +this.state.token;
    }

    render() {
        return (
        <div>
            <div className="container" id="game">
              <div>
                <h3>Five times thirty</h3><span>Player</span><span>{this.state.pointP}</span>
                    <span>Computes</span><span>{this.state.pointAI}</span>
              </div>
              <div class="row row-content">
                <div className="game-board col-12 col-md-4">
                  <Board max={this.getMax()} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info  col-12 col-md-2">
                  <div>{Math.min(5,this.state.stepNumber)} <span>{this.state.pointP}</span> <span>{this.state.pointAI}</span></div>
                  <button class="btn-danger" onClick={() => this.restartGame()}>Restart</button>
                  <br></br>
                  <History history={this.state.history}></History>
                </div>
                <details open className="game-info  col-12 col-md-4">
                  <summary>Rules</summary>
                  <br/>
                  <ol className="gamerule">
                  <li>There are five round. At each round choose a number</li>
                  <li>The numer has to be greater than zero</li>
                  <li>The sum of the numbers played in the five rounds has to be thirty</li>
                  <li>The player with the heigher number wons that round, and gains a point</li>
                  <li>At the end of the fifth round, the player with more points wins</li>
                  </ol>
                </details>
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