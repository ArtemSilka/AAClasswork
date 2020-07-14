import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs'
const objects = [
  { 
    title: "One",
    content: "I'm the first"
  },
  {
    title: "Two",
    content: "Second pane"
  },
  {
    title: "Three",
    content: "Third pane"
  }
];
class Widget extends React.Component{
  render(){
    return(
      <div>
        <Clock />
        <Tabs objects={objects}/>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widget />, root);
});
