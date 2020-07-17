import React from 'react';
            //        ( {id,  }  )
const TodoListItem = ({ todo }) => {
    // debugger;
    return (
        <div>
            <li>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
            </li>
        </div>
    );
};

export default TodoListItem;