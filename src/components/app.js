import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import axios from 'axios';
import AddItem from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';
import ItemDetails from './item_details'

import {Route, Switch} from 'react-router-dom';
import NotFound from './not_found'

import config from '../config'

class App extends Component {
    // state = {
    //     list: [],
    //     error: '',
    // }
    // componentDidMount(){
    //     this.getListData();
    // }
    // async getListData(){
    //     //call server to get data, this would be function for success of AJAX call

    //     try {
    //         const resp = await axios.get(`${config.API_URL}/todos${config.API_KEY}`)

    //         if (!resp.data.success){ //if something goes wrong, stop everything and go straight to the error
    //             throw new Error ('Something went wrong!')
    //         }

    //         this.setState({
    //             list: resp.data.todos
    //         })
    //     } catch (err){
    //         this.setState({
    //             error: err.message
    //         })
    //     }

        // const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp)=>{
        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch((err)=>{
        //     this.setState({
        //         error: err.message
        //     })
        // });

    // }
    //originally here because of set state, but because on server, can move around
    // addItem = async (item) => { //way of pulling data up from child
    //     const resp = await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    //     this.getListData();

    //     // item._id = new Date().getTime(); //faking generate new ID with timestamp
    //     // this.setState({
    //     //     list: [item, ...this.state.list]
    //     // })

    //     // axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp)=>{
    //     //     this.getListData();
    //     // }).catch((err)=>{
    //     //     console.log('Add Item Error:', err)
    //     // })

    // }
    // deleteItem = async id => {
    //     await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);
    //     this.getListData();


    //     const {list} = this.state;
    //     const listCopy = list.slice();
    //     listCopy.splice(index,1);
    //     this.setState({
    //         list: listCopy
    //     })
    // }
    render(){
        // const {list, error} = this.state
        return(
            <div className="container">
                {/* <Route exact path="/" render={(routingInfo)=>{
                    return <List {...routingInfo} error={error} data={list} delete={this.deleteItem}/>
                }}/> */}
                {/* <Route path="/add-item" render={props=>(
                    <AddItem {...props} add={this.addItem}/>
                )}/> */}
                {/* <AddItem add={this.addItem}/> */}
                <Switch>
                    <Route exact path="/" component={List}/>
                    <Route path="/add-item" component={AddItem}/>
                    <Route path="/item/:itemId" component={ItemDetails}/>
                    <Route component={NotFound}/>
                </Switch>

            </div>
        )
    }
}

export default App;
                // {/* <h1 className="center">Do Things App</h1> */}
