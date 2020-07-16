import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todos.js';
import { merge } from 'lodash';

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

  // When we are done testing remember later to remove the initial state and set it to an empty object {}

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    let newState = {};
    switch(action.type) {
        case RECEIVE_TODO: 
            const { title, body, done, key } = action;
            const newTodo = {
                [key]: {
                    title: title,
                    body: body,
                    done: done,
                    id: key
                }
            };
            
            // const newState = merge({} , state, newTodo);
            newState = merge({} , state, newTodo);
            return newState;
        case RECEIVE_TODOS:
            //action = [objects]
            //itterate through action
            // let replacedState = {};
            // let newState = {};
            // debugger
            action.todos.forEach((obj, idx) => {
                newState[obj.key] = { // newState[0]
                    tile: obj.title,
                    body: obj.body,
                    done: obj.done,
                    id: obj.key
                };
            })
            return newState;
        default:
            return state;
    }
};


export default todosReducer;