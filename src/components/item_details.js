import React from 'react';
import axios from 'axios';
import config from '../config';
import NavBtn from './nav_btn'

export default class ItemDetails extends React.Component {
    state = {
        item: null
    }

    componentDidMount(){
        this.getToDoItem();
    }

    async getToDoItem(){
        const {itemId} = this.props.match.params;
        // const resp = await axios.get(`${config.API_URL}/todos/${itemId + config.API_KEY}`);
        // this.setState({
        //     item: resp.data.todo
        // })
        try {
            const resp = await axios.get(`${config.API_URL}/todos/${itemId + config.API_KEY}`);
            this.setState({
                item: resp.data.todo
            })
        } catch (err){
            this.setState({
                item: {}
            })
        }
    }

    render(){
        const {item} = this.state;
console.log('item:', item) //display all information, convert timestamp, delete button. when delete button, route back homepage
//axios.put same as axios.get, completes the item. gives you a new timestamp for completed. indicate that item is completed on homepage
//add two more buttons, delete and complete button
        if(!item){
            return <h1 className="center">LOADING...</h1>;
        }

        if(!item.title){
            return (
                <div>
                    <h1 className="center">DATA NOT FOUND</h1>
                    <NavBtn to="/" color="blue darken-2" text="Back To Home"/>
                </div>
            )
        }
        return(
            <div>
                <h1 className="center">{item.title}</h1>
                <h2 className="center">{item.details}</h2>
                <NavBtn to="/" color="blue darken-2" text="Back To Home"/>
            </div>
        )
    }
}
