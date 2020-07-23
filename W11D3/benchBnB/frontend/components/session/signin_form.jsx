import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (event) => {
            this.setState({ [type]: event.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.signinForm(this.state)
            .then(() => this.props.history.push('/'));
    }

    showErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.showErrors()}
                </div>
                <h2>Log In!</h2>
                <Link to="/signup">Sign Up</Link>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Log In!</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default Signin;
