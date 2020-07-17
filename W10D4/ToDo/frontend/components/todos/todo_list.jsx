import React from 'react';
import TodoListItem from './todo_list_item'
import todo_list_container from './todo_list_container';
import TodoForm from './todo_form'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        // debugger
    }

    render() {
        // debugger;
        return (
            <div>
            <h1>Todo List goes here</h1>
            <TodoForm props={this.props}/>
            <ul>
                {
                    this.props.todos.map((todo) => (
                        <TodoListItem todo={todo} key={todo.id} />
                    ))
                }
            </ul>
            </div>
        );
    }
}

export default TodoList;