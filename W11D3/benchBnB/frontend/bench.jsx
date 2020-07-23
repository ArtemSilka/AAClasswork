import React from "react";
import ReactDOM from "react-dom";
import { signin, signout, makeNewUser } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //TEST
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.$ = $;
    window.signin = signin;
    window.signout = signout;
    window.makeNewUser = makeNewUser;
    //TEST

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
