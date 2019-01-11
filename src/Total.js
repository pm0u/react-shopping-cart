import React from 'react'


class Total extends React.Component {
  render() {
    return (<>
      <p>Total: {`$${(this.props.total/100).toFixed(2)}`}</p>
    </>)
  }
}

export default Total
