import React, {Component} from 'react';

class FilterString extends Component{
  constructor(){
    super()
    this.state ={
      names: ['Hunter', 'Vann', 'John', 'Bob', 'Jacob', 'Sean'],
      userInput: '',
      filteredArray: []
    }
  }
  handleChange(val){
    this.setState({userInput: val})
  }
  filterString(input){
    let names = this.state.names
    let filtered = []
    for(let i = 0; i <names.length; i++){
      if(names[i].includes(input)){
        filtered.push(names[i])
      }
    }
    this.setState({filteredArray: filtered})
  }
  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Names: {JSON.stringify(this.state.names)}</span>
        <input className='inputLine' onChange={e=>this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={()=>{this.filterString(this.state.userInput)}}></button>
        <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString
