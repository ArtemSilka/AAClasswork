import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./frontend/store/store";
// import App from "./frontend/components/app"
import Root from './frontend/components/root'
import { receiveTodo, receiveTodos } from "./frontend/actions/todos";
import { getAllTodos } from './frontend/reducers/selectors'

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.store = configureStore;
window.getAllTodos = getAllTodos;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(<Root store = {configureStore} />, root);
});
 