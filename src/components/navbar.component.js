import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {

        return (
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="MERNDemo/" className="navbar-brand">Excercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="MERNDemo/" className="nav-link">Excercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="MERNDemo/create" className="nav-link">Create Excercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="MERNDemo/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );

    }
}