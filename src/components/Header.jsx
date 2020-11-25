import React, { Component } from 'react'
import {newsCategory} from '../news'

class Header extends Component {
    
    state = {
        searceTerm: ''
    }
    
    handleChange = (e) => {
        this.setState({searceTerm: e.target.value})
    }
    
    handleKeyPress = e => {
        //Todo implement later
    }
    
    render() {
        const {category, changeCategory} = this.props;
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight: 300}}>
                    Block Blaster Headlines
                </h1>
                <input 
                    type='search' 
                    className='form-control'
                    placeholder='Type Anything & Press Enter To Search'
                    value={this.state.searceTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className='my-4'>
                    { newsCategory && Object.keys(newsCategory).map((item) => {
                        if(category == newsCategory[item]){
                            return(
                                <button 
                                    onClick={()=>changeCategory(newsCategory[item])} 
                                    className='btn btn-sm btn-warning mr-2 mb-2'>
                                        {`#${newsCategory[item]}`}
                                </button>
                            )
                        }
                        return(
                            <button 
                                onClick={()=>changeCategory(newsCategory[item])} 
                                className='btn btn-sm btn-light mr-2 mb-2'>
                                    {`#${newsCategory[item]}`}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header