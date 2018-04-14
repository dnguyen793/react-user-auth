import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class Nav extends Component{

    renderLink(){
        const linkStyle ={
            color: 'white'
        }
        if(this.props.auth){
            return[
                <Link key='0' style={linkStyle} className="nav-link" to="/secret-docs">Secret Docs</Link>,
                <Link key='1' style={linkStyle} className="nav-link" to="/operatives-list">Operatives List</Link>,
                <Link key='2' style={linkStyle} className="nav-link" to="/movie-quote">Movie Quotes</Link>,
                <button onClick={this.props.signOut} key='3' className="btn btn-light">Sign Out</button>
            ];
        }

        return [
            <Link key='0' style={linkStyle} className="nav-link" to="/sign-up">Sign Up</Link>,
            <Link key='1' style={linkStyle} className="nav-link" to="/sign-in">Sign In</Link>
        ];
    }

    render(){
        const linkStyle ={
            color: 'white'
        }
        console.log('Auth:', this.props.auth);
        return(
            <nav className="navbar bg-primary">
                <Link style={linkStyle} className="nav-link" to="/">Home</Link>
                <Link style={linkStyle} className="nav-link" to="/about-us">About Us</Link>
                {this.renderLink()}
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut})(Nav);
