import React from 'react';
import Name from './Name';


export default class MyFriend extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
    }
  }

  toggleName(newName){
    this.setState({
      name: newName,
    })
  }

  render(){
    return(
      <div className="myFriend">
        <h1>MyFriend</h1>
        <h2>{this.props.name}</h2>
        <Name toggleName={this.toggleName.bind(this)} />
      </div>

    )
  }
}
