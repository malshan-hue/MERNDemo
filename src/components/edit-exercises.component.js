import React, { Component, createRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercises extends Component {

    // The constructor is a method used to initialize an object's state in a class.
    constructor(props) {
        // super() is used to call the constructor of parent class.
        super(props);

        // In JavaScript, class methods are not bound by default. 
        this.onChangeUsername = this.onChangeUsername.bind(this); 
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.userInputRef = createRef();

        // In React, component properties should be kept in an object called state.
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }

    }
    

    componentDidMount(){

        const url = window.location.href;
        const parts = url.split('/');
        const id = parts[parts.length - 1];              

        axios.get('http://localhost:5000/exercises/' + id)
            .then(Response => {
                this.setState({
                    username: Response.data.username,
                    description: Response.data.description,
                    duration: Response.data.duration,
                    date: new Date(Response.data.date)
                })
            })
            .catch(function(error){
                console.log(error);
            })

        axios.get('http://localhost:5000/users')
            .then(Response => {
                if(Response.data.length > 0){
                    this.setState({
                        users: Response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        const url = window.location.href;
        const parts = url.split('/');
        const id = parts[parts.length - 1];    

        await axios.post('http://localhost:5000/exercises/update/' + id, exercise)
            .then(res => console.log(res.data));
        
        window.location = '/'
    }
    
    render() {
        return (
            <div>
                <h3>Edit exercise log</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Username</label>
                        <select ref = {this.userInputRef} required className="form-control" value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user){
                                        return <option key={user} value={user}> {user} </option>
                                    })
                                }
                            </select>
                    </div>

                    <div className="form-group">
                        <label>description</label>
                        <input type="text" required className="form-control" value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input type="text" required className="form-control" value={this.state.duration}
                            onChange={this.onChangeDuration} />
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Excercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}