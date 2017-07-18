import React, {Component} from 'react';

class Palindrome extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }
  handleChange(val){
    this.setState({userInput: val})
  }
  isPalindrome(str){
    let arr = str.split('')
    let rev = str.split('').reverse()
    let check = []
    let palindrome = 'false'
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === rev[i]){
        check.push(arr[i])
      }
    }
    if(check.length === arr.length){
      palindrome = 'true'
    }
    this.setState({palindrome: palindrome})
  }
  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={e=>this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={()=>{this.isPalindrome(this.state.userInput)}}>Is it a Palindrome?</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome
