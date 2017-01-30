import React, { Component } from 'react'

export default class TableRow extends Component{

  render(){
    return(
      <tr>
        <td>
          <p>{this.props.personData.name}</p>
        </td>
        <td>
          {this.props.personData.email}
        </td>
        <td>
          <p>{this.props.personData.signUpDate.toString()}</p>
        </td>
        <td>
          <p>{this.props.personData.company_name}</p>
        </td>
      </tr>
    )
  }
}
