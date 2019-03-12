import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import './App.css';

class App extends Component {

  state = {
    groceries: [
      {id: 1, name: "Milk", complete: true, },
      {id: 2, name: "Mac and Cheese", complete: false, },
      {id: 3, name: "Butter", complete: false, }
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = {name, id: this.getId(), complete: false}
    this.setState({ groceries: [grocery, ...groceries] });

  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })

  }

  // renderGroceries = () => {
  //   const { groceries, } = this.state
  //   return groceries.map(grocery =>
  //     <li key={grocery.id}>{grocery.name}</li>
  //   )
  // };

  render() {
    const { groceries } = this.state;

    return (
      <div id="List">
        <List name="Grocery List" items={groceries} groceryClick={this.handleClick} />
        <GroceryForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
