import React, { PropTypes } from 'react';

// declare renderCount outside of component so component does not re-render as if it was part of this.state
let renderCount = 0

class OnlyElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {renderCount: 0}
  }
  shouldComponentUpdate = (nextProps) => {
    return nextProps.element !== this.props.element// shallow comparison of all this.prop's properties
  }

  componentDidUpdate = () => {
    console.log(`OnlyElement: I updated for the  ${renderCount} time `);
    renderCount++;

  }
  render () {
    return <div>
      <p>OnlyElement:</p>
      <p>id: {this.props.element.id},</p>
      <p>rendered: {renderCount}</p>
    </div>
  }
}

OnlyElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number
  })
}

export default OnlyElement;
