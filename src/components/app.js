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
     render () {
          return (
               <div>
                    <h1>React ToDo App</h1>
                    <TodosList />
               </div>
          )
     }
}