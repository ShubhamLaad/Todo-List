import React, { Component } from 'react';
class HomeWork extends Component{
    constructor(){
        super();
        this.state={
            name:"PravinI",
        };
    }

    changeName(){

        this.setState({
            backgroundColor: "Red",

        })
    }

    render(){
       console.log(this);
        return(
        <div id="temp">
          <h1>My Name is {this.state.name}</h1>
          <button onClick={this.changeName}>Click2</button>
        </div>
       );
    }

    
}
export default HomeWork;