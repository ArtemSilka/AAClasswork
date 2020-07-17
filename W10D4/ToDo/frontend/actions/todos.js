// {
//     1: {
//       id: 1,
//       title: 'wash car',
//       body: 'with soap',
//       done: false
//     },
//     2: {
//       id: 2,
//       title: 'wash dog',
//       body: 'with shampoo',
//       done: true
//     },
//   }

export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

function uniqueId() {
    return new Date().getTime();
}
//! NOTE -> Check later to see if we need to deconstruct the object passed since now we are using this action in the container
export const receiveTodo = ({title, body, done}) => {
    return {
        type: RECEIVE_TODO,
        title: title,
        body: body,
        done: done,
        key: uniqueId()
    };
};
//
export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos: todos
    };
};
