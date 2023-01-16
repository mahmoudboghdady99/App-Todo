import React, {Component} from 'react'
import TodoItem from './components/TodoItems/TodoItem';
import AddItem from './components/AddItems/AddItem';

class App extends Component{
  state = {
    items: [
      {id: 1, name: 'hamza', age: 22},
      {id: 2, name: 'nour', age: 25}
    ]
  }
  render(){
    return(
      <>
        <h2>list items</h2>
        <TodoItem />
        <AddItem />
      </>
    )
  }
}

export default App;
