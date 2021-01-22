import React from 'react';
import '../Maincontainer/Maincontainer.css';
import Loginscreen from '../Loginscreen/Loginscreen';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register'

const Maincontainer = props => {

    return (
        <div className="container">
            <Login></Login>
            <Register></Register>
        </div>
    )
};

export default Maincontainer;