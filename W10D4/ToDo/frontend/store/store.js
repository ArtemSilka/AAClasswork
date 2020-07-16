import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
// import { artem }

const configureStore = createStore(rootReducer);

export default configureStore;