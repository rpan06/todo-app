import React from 'react';
import axios from 'axios';
import config from '../config';
import NavBtn from './nav_btn';
import FormatTime from './format_time';
import CompletedStatus from './completed_status'
import {Link} from 'react-router-dom';

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

    deleteItem = async id => {
        await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);

        this.props.history.push('/');
    }
    async toggleCompleted(id){
        const resp = await axios.put(`${config.API_URL}/todos/${id + config.API_KEY}`);
        this.setState({
            item: resp.data.todo
        })
    }

    render(){
        const {item} = this.state;
        console.log(item)
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
                <CompletedStatus status={item.complete}/>
                <FormatTime text="Completed:" time={item.completed} />
                <FormatTime text="Created:" time={item.created} />
                <button className="btn red left-align" onClick={()=>{this.deleteItem(item._id)}}>Delete</button>
                <div className="col s6 center-align">
                    <button className="btn" onClick={()=>{this.toggleCompleted(item._id)}}>Completed</button>
                </div>

                <NavBtn to="/" color="blue darken-2" text="Back To Home"/>
            </div>
        )
    }
}
