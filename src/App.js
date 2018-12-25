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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: newName, age: 24 }
      ]
    });
  };

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
    return (
      <div className="App">
        <button className="m-4" onClick={this.toggleShowHideHandlerMaxWay}>
          {this.state.showHide ? "Hide" : "Show"}
        </button>
        {this.state.showHide ? (
          <div>
            <button onClick={() => this.switchNameHandler("Whatever!")}>
              Switch Name
            </button>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              change={this.changeNameHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              click={this.switchNameHandler.bind(this, "Maggie!")}
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            >
              I'm just a basicboy!
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
