import React, {Component} from 'react';

class Sum extends Component{
  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  updateNumber1(val){
    this.setState({number1: parseInt(val, 10)})
  }
  updateNumber2(val){
    this.setState({number2: parseInt(val, 10)})
  }
  Add(num1, num2){
    let sum = num1 + num2;
    this.setState({sum: sum})
  }
  render(){
    return(
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={e=>this.updateNumber1(e.target.value)}></input>
        <input className='inputLine' onChange={e=>this.updateNumber2(e.target.value)}></input>
        <button className='confirmationButton' onClick={()=>{this.Add(this.state.number1, this.state.number2)}}></button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum
