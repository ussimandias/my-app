import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class RobotBox extends React.Component {

  render(){
    return <div> Hello From React</div>
  }
}


class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  /* class MainComponent extends React.Component {
    state = {
      compatible: true
    }
    
    constructor() {
      super();
    }

    componentWillMount() {
      if (
        !Modernizr.flexbox ||
        !Modernizr.cssanimations ||
        !Modernizr.rgba
      ) {
        this.setState({
          compatible: false
        })
      }
    }

    _handleCloseCompatible = () => {
      this.setState({
        compatible: true
      })
    }
    
    render = () => (
      <div>
        <CompatibilityThing onClickClose={this._handleCloseCompatible} open={this.state.compatible}/>
      </div>
    ) 
  }
  
  // ========================================
  
  /* ReactDOM.render(
    <Game />,
    document.getElementById('root')
  ); */
let target = document.getElementById('robot-app');

 ReactDOM.render(<RobotBox /> ,target); 