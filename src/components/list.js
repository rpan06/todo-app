import React, {Component} from 'react';
import axios from 'axios';
import config from '../config'
import Item from './item'
import NavBtn from './nav_btn';
// import {Link} from 'react-router-dom'

export default class List extends Component {
    state = {
        list: [],
        error: '',
    }
    componentDidMount(){
        this.getListData();
    }
    async getListData(){
        try {
            const resp = await axios.get(`${config.API_URL}/todos${config.API_KEY}`)

            if (!resp.data.success){ //if something goes wrong, stop everything and go straight to the error
                throw new Error ('Something went wrong!')
            }

            this.setState({
                list: resp.data.todos
            })
        } catch (err){
            this.setState({
                error: err.message
            })
        }
    }
    deleteItem = async id => {
        await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);
        this.getListData();
    }
    render(){
        const {error, list} = this.state;
        const listElements = list.map((item, index)=>{
            return <Item key={item._id} item={item} delete={()=>{this.deleteItem(item._id)}}/>
        })
        return(
            <div>
                <h1 className="center">THINGS LIST</h1>
                <NavBtn to="/add-item" text="Add Item" color="blue darken-2"/>
                <p className="red-text text-darken-2">{error}</p>
                {/* <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/add-item" className="btn blue darken-2">Add Item</Link>
                    </div>
                </div> */}
                <ul className="collection">
                    {listElements}
                </ul>
            </div>

        )
    }
}
