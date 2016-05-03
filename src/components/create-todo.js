import React from 'react';


export default class CreateTodo extends React.Component {
     render()  {
          return (
               <form>
                    <input type="text" placeholder="Enter a Todo here" />
                    <button>Create</button>
               </form>
          );
     }
}