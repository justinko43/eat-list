import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
// import fetch from 'fetch';

class List extends Component {

    render() {
        return(
            <div>
                <h2>Your Saved List</h2>
                <ul>
                {this.props.saved.length !== 0 && this.props.saved.map((item,i) => { 
                        return (
                        <div key={i} id={item} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <li style={{listStyleType: 'none'}}>
                                {item.name}| Rating: <b>{item.rating}</b>
                            </li> 
                            <button className="delete" type="button" onClick={() => this.props.deleteRequest(i)}>X</button>
                        </div>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default List;