import React, {Component} from 'react';
import dummyListData from '../dummy_data/list_data'


export class List extends Component {
    state = {
        list: [],
    }
    componentDidMount(){
        this.getListData();
    }
    getListData(){
        //call server to get data, this would be function for success of AJAX call
        this.setState({
            list: dummyListData
        });
    }
    render(){
        const listElements = this.state.list.map((item, index)=>{
            return <li className="collection-item" key={item._id}>{item.title}</li>
        })
        return(
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
}
