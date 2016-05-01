import React from 'react';
import TodosList from './todos-list';


const todos = [
{
     task: 'Learn React JS',
     isCompleted: false
},
{
     task: 'Learn Webpack + ES6',
     isCompleted: true
}
];


export default class App extends React.Component {
constructor(props) {
     super(props);
     
     this.state = {
          todos
          //  ^ without ES6 systax it would be todos: todos 
     };
}

     render () {
          return (
               <div>
                    <h1>React ToDo App</h1>
                    <TodosList todos={this.state.todos} />
               </div>
          )
     }
}