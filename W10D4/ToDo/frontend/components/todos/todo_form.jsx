import React from 'react';

class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            body: "",
            title: ""
        }
        

        this.updateTodoBody = this.updateTodoBody.bind(this);
        this.updateTodoTitle = this.updateTodoTitle.bind(this);
        this.submit = this.submit.bind(this);
    }
    // Ask TA later how to join into one method to be more DRY
    updateTodoBody(event) {
            this.setState({
                body: event.currentTarget.value
            });
        // return (event) => {
        //     this.setState({
        //         body: event.currentTarget.value
        //     });
        // }
    }

    updateTodoTitle(event) {
            this.setState({
                title: event.currentTarget.value
            });

        // return (event) => {
        //     this.setState({
        //         body: event.currentTarget.value
        //     });
        // }
    }

    submit(event) {
        // debugger;
        event.preventDefault();
        const newTodo = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.props.receiveTodo(newTodo);
        this.setState({title: "", body: ""})
    }

    render () {
        // debugger;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Title:
                        <input type="text" onChange={this.updateTodoTitle} value={this.state.title}/>
                    </label>

                    <label>Body:
                        <input type="text" onChange={this.updateTodoBody} value={this.state.body}/>
                    </label>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }

}

export default TodoForm;