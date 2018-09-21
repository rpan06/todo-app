import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import axios from 'axios';
import AddItem from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=originalkeyname'

class App extends Component {
    state = {
        list: [],
        error: '',
    }
    componentDidMount(){
        this.getListData();
    }
    async getListData(){
        //call server to get data, this would be function for success of AJAX call

        try {
            const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`)

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

        // const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp)=>{
        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch((err)=>{
        //     this.setState({
        //         error: err.message
        //     })
        // });

    }
    addItem = async (item) => { //way of pulling data up from child
        const resp = await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        this.getListData();

        // item._id = new Date().getTime(); //faking generate new ID with timestamp
        // this.setState({
        //     list: [item, ...this.state.list]
        // })

        // axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp)=>{
        //     this.getListData();
        // }).catch((err)=>{
        //     console.log('Add Item Error:', err)
        // })

    }
    deleteItem = async id => {
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
        this.getListData();
        // const {list} = this.state;
        // const listCopy = list.slice();
        // listCopy.splice(index,1);
        // this.setState({
        //     list: listCopy
        // })


    }
    render(){
        const {list, error} = this.state
        return(
            <div className="container">
                <h1 className="center">Do Things App</h1>
                <AddItem add={this.addItem}/>
                <p className="red-text">{error}</p>
                <List data={list} delete={this.deleteItem}/>
            </div>
        )
    }
}

export default App;
