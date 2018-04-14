import React, {Component} from 'react';
import {connect} from 'react-redux';
import { handleInputchange } from '../actions';

class Field extends Component{
    

    render(){
        const { label, type, placeholder, name, value, handleInputchange } = this.props;

        return(
            <div className="form-group">
                <label className="text-white">{label}</label>
                <input onChange={handleInputchange} value={value} type={type} name={name} className="form-control" placeholder={placeholder}/>
            </div>
        )
    }
}


export default connect(null, {handleInputchange})(Field);