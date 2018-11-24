import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ToggleName from './ToggleName';
import NameForm from './NameForm';
import ToDoList from './ToDoList';
//import ToDoForm from './ToDoForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ['xyx', 'abc']
    };
  }

  addNewValue = (newValue) => {
    let newList = Object.assign([], this.state.list);
    if (newValue && newList.indexOf(newValue) === -1) {
      /*let newList = [...this.state.list];*/
      newList.push(newValue);
      this.setState({ list: newList });
    }
    else (alert("Please Enter any Value"));
  };

  removeFromList = (index) => {
    let d = [...this.state.list];
    d.splice(index, 1);
    this.setState({ list: d });
  };

  editValueFromList = (index, changedValue) => {
    const list = [...this.state.list];
    list[index] = changedValue;
    this.setState({ list });
  };

  render() {
    return (
      <center>
        <div className="App mydemo">
          <header className="App-header">
            <div className="clsNameForm">
              <NameForm addList={this.addNewValue} />
            </div>
            <div className="clsToDolist">
              <ToDoList list={this.state.list} removeFromList={this.removeFromList} editValueFromList={this.editValueFromList} />

            </div>

          </header>
        </div>
      </center>
    );
  }
}

export default App;
