import React, {Component} from 'react'
import TodoItem from './components/TodoItems/TodoItem';
import AddItem from './components/AddItems/AddItem';

class App extends Component{
  state = {
    items: [
      {id: 1, name: 'hamza', age: 22},
      {id: 2, name: 'nour', age: 25},
      {id: 3, name: 'hazem', age: 27}
    ]
  }
 
  deleteItem = (id) => {
  let items=this.state.items;
  let i = items.findIndex(item => item.id===id)
    items.splice(i, 1)
    this.setState({items})
  }

  render(){
    return(
      <>
        <h2>list items</h2>
        <TodoItem items={this.state.items} deleteItems={this.deleteItem} />
        <AddItem />
      </>
    )
  }
}

export default App;
