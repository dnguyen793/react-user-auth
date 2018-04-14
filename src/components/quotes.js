import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getQuote } from '../actions';

class Quotes extends Component{
    componentDidMount(){
        this.props.getQuote();
    }

    render(){
        return(
            <div>
                <h1 className='text-center'>Movie Quote</h1>
                <p>{this.props.quote}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        quote: state.user.quote
    }
}

export default connect(mapStateToProps, {getQuote})(Quotes);