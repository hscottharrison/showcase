import React, {Component} from 'react';

class FilterObjects extends Component{
  constructor(){
    super()
    this.state ={
      unFilteredArray: [
        {
          name: 'Hunter',
          hairColor: 'Brown'
        },
        {
          name: 'Vann',
          eyeColor: 'Blue'
        },
        {
          name: 'Johnny',
          age: 24
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }
    handleChange(val){
      this.setState({userInput: val});
    }
    filter(prop){
      let people = this.state.unFilteredArray
      let filtered = []
      for(let i = 0; i < people.length; i++){
        if(people[i].hasOwnProperty(prop)){
          filtered.push(people[i]);
        }
      }
      this.setState({filteredArray: filtered})
    }
  render(){
    return(
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
        <input className='inputLine' onChange={e=>this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={()=>{this.filter(this.state.userInput)}}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    )
  }
}

export default FilterObjects
