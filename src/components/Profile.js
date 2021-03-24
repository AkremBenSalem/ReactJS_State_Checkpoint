import React, { Component } from 'react';
import PropTypes from "prop-types";

class Profile extends Component{
    
    render(){
    return (
        <div>
            <h1 style={{color : 'red'}}>{this.props.fullName}</h1> 
            <h1 style={{color : 'blue'}}>{this.props.bio} </h1> 
            <h1>{this.props.profession}</h1>
            <img src={this.props.imgSrc} alt="Profile" style={{width : 150}} /> 
        </div>
        )
    };
}
Profile.defaultProps = {
    fullName: "A Full Name",
    bio : "A bio",
    profession : "A profession"
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
};

export default Profile;