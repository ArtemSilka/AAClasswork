import { connect } from 'react-redux';
import TodoList from "./todo_list";
import { getAllTodos } from "../../reducers/selectors";

const mapStateToProps = (state) => {
    return {
        todos: getAllTodos(state)
    } 
};

const mapDispatchToProps = (dispatch) => {
    // debugger;
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)) 
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);