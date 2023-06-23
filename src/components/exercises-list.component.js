import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional React component
const Excercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.data}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id} >edit</Link> | <button className="btn btn-warning btn-sm" onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</button>  
        </td>

    </tr>
)

export default class ExercisesList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};

    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
            .then(Response => {
                this.setState({exercises: Response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data))
        
        // After deleting the exercise, the exercise is removed from the exercises array.
        this.setState({
            // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    // The map() method creates a new array with the results of calling a function for every array element.
    ExercisesList(){
        // The Exercise component is called for each exercise in the exercises array.
        return this.state.exercises.map(currentexercise => {
            // The key attribute is used by React to identify which items have changed, are added, or are removed.
            return <Excercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ExercisesList()}
                    </tbody>
                </table>
            </div>
        )
    }

}