import React, { PropTypes } from 'react';
import ArrayAndIndex from './ArrayAndIndex';
import OnlyElement from './OnlyElement';

class ChangeValue extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arr: [{id: 1}],
    }
  }
  addToArray = () => {
    this.setState({
      arr: this.state.arr.concat({})
    })
  }
  changeValue = () => {
    const arr = Object.assign([], this.state.arr);
    arr[0] = {id: this.state.arr[0].id + 1}
    this.setState({
      arr
    })
  }
  render () {
    return <div style={{width:'50%', marginLeft: 'auto', marginRight: 'auto', textAlign:'center'}}>
      <p>The following button adds an element to the array-- more specifically, it creates a new array with an extra element at the back</p>
      <button onClick={this.addToArray} >Add to array</button>
      <p>The following button returns a new array with a new object in the 0th spot.  This is the element we are rendering using two different components</p>
      <button onClick={this.changeValue}> Change Value</button>
      <hr/>
      <ArrayAndIndex index={0} array={this.state.arr}/>
      <hr/>
      <OnlyElement element={this.state.arr[0]}/>
    </div>
  }
}

export default ChangeValue;
