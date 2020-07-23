import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signUp } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.$ = $;
    window.login = login;
    window.logout = logout;
    window.signUp = signUp;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
