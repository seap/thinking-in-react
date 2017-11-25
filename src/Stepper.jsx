import React, { PureComponent } from 'react'

// export default props => {
//   console.log('props.value: ', props.value)
//   return (
//     <div>value: {props.value}</div>
//   )
// }

export default class Stepper extends PureComponent {
  render() {
    console.log('props.value: ', this.props.value)
    return (
      <div>value: {this.props.value}</div>
    )
  }
}