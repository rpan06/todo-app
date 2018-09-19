import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import AddItem from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';

class App extends Component {
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
    addItem=(item)=>{ //way of pulling data up from child
        item._id = new Date().getTime(); //faking generate new ID with timestamp
        this.setState({
            list: [item, ...this.state.list]
        })
    }
    render(){
        const {list} = this.state
        return(
            <div className="container">
                <h1 className="center">Do Shit App</h1>
                <AddItem add={this.addItem}/>
                <List data={list}/>
            </div>
        )
    }
}

export default App;
