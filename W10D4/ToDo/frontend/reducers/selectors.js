// state = { todos } state.todos
export const getAllTodos = ({ todos }) => (
    Object.keys(todos).map(id => todos[id])
);