import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {

    // The constructor is a method used to initialize an object's state in a class.
    constructor(props) {
        // super() is used to call the constructor of parent class.
        super(props);

        // In JavaScript, class methods are not bound by default. 
        this.onChangeUsername = this.onChangeUsername.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);

        // In React, component properties should be kept in an object called state.
        this.state = {
            username: '',
        }

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        });
    }

    render() {
        return (

            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type='text' className='form-control' value={this.state.username}
                            onChange={this.onChangeUsername} required />
                    </div>

                    <div className="form-group">
                        <input type='submit' value='Create User' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        );
    }

}