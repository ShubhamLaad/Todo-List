import React from 'react';

export default class Name extends React.Component{
  constructor(){
    super()
    this.state = {};
  }

  toggleName(){
    this.props.toggleName('Ram');
  }

  render(){
    console.log(this);
    return(
      <div className="myname">
        <h1>Name component</h1>
        <button onClick={this.toggleName.bind(this)}>ok</button>

      </div>

    )
  }
}
