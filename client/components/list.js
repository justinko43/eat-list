import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
// import fetch from 'fetch';

class List extends Component {

    render() {
        return(
            <div>
                {this.props.saved.length !== 0 && this.props.saved.map((item,i) => { 
                        return (
                        <div key={i} id={item}>
                            <li style={{listStyleType: 'none'}}>{item.name} - {item.rating}</li> <button type="button">X</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List;