import React from 'react';
import Item from './item'


export default props => {
    const listElements = props.data.map((item, index)=>{
        return <Item key={item._id} item={item} index={index} delete={props.delete}/>
    })
    return(
        <ul className="collection">
            {listElements}
        </ul>
    )
}


//return <li className="collection-item" key={item._id}>{item.title}</li>
