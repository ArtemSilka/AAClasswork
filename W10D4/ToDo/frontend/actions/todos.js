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

export const recieveTodo = (title, body, done) => {
    return {
        type: RECEIVE_TODO,
        title: title,
        body: body,
        done: done,
        key: Math.floor(Math.random() * 1000)
    };
};
//
export const recieveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos: todos
    };
};
