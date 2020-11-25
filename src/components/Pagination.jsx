import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
    
    state = {
        isEditable: false
    }
    
    render() {
        return (
            <div className='my-5 d-flex align-items-center'>
                <button className='btn btn-warning'>Previous</button>
                <div className='flex-grow-1 text-center'>
                    {this.state.isEditable ? (
                        <input type='number' value='1' />
                    ) : (
                        <p 
                            style = {{userSelect:"none", lineHeight:'1.1'}}
                            title = 'Double Tap To Jump Page'
                            onDoubleClick = {() => {
                                this.setState({isEditable : !this.state.isEditable})
                            }}
                        >
                            {1} to {100}
                            <br/>
                            <small>Double Tap To Edit</small>
                        </p>
                    )}
                </div>
                <button className='btn btn-warning ml-auto'>Next</button>
            </div>
        );
    }
}

Pagination.propTypes = {

};

export default Pagination;