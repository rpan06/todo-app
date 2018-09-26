import React from 'react';

export default props => {
    console.log(props)
    if(props.time === null){
        return (
            <div className="center">
            </div>
        )
    }
    let date = new Date(JSON.parse(props.time))
    let dateStr = date.toString()
    return (
        <div className="center">
            <h5>{props.text} {dateStr}</h5>
        </div>
    )
}
