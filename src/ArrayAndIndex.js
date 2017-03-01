import React, { PropTypes } from 'react';

let renderCount = 0


class ArrayAndIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {renderCount: 0}
  }
  shouldComponentUpdate = (nextProps) => {
    // shallow comparison of all this.prop's properties.  This is the same
    // comparison react-redux connects do.
    return nextProps.array !== this.props.array ||
      nextProps.index !== this.props.index
  }
  componentWillUpdate = () => {
    console.log(`ArrayAndIndex: I updated for the  ${renderCount} time `);
    renderCount++;

  }
  render () {
    return <div>
      <p>ArrayAndIndex:</p>
      <p>id: {this.props.array[this.props.index].id},</p>
      <p>rendered: {renderCount} </p>
    </div>
  }
}

ArrayAndIndex.propTypes = {
  index: PropTypes.number,
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number
  }))
}

export default ArrayAndIndex;
