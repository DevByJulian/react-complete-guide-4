import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    ottherState: "some other value",
    showHide: true
  };

  changeNameHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 24 }
      ]
    });
  };

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons})

}

  toggleShowHideHandler = () => {
    this.setState({
      showHide: !this.state.showHide
    });
  };

  toggleShowHideHandlerMaxWay = () => {
    const doesShow = this.state.showHide
    this.setState({
      showHide: !doesShow
    });
  };

  render() {

    let persons = null;

    if(this.state.showHide) {
      persons = (
        <div>
          <button onClick={() => this.switchNameHandler("Whatever!")}>
            Switch Name
          </button>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={() => {this.deletePersonHandler(index)}} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <button className="m-4" onClick={this.toggleShowHideHandlerMaxWay}>
          {this.state.showHide ? "Hide" : "Show"}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
