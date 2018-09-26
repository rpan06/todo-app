import React from 'react';

export default props => {
    let text = "not completed";
    let color = "red"
    if (props.status){
        text = "completed";
        color = "green"
    }
    return (
        <div className="row">
            <h4 className={`center ${color}`}>{text}</h4>
        </div>
    )
}
