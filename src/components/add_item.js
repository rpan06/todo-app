import React from 'react';

class AddItem extends React.Component {
    state={
        title: '',
        details: '',
    }

    handleAddItem=(e)=>{
        e.preventDefault();
        console.log('new item', this.state);
        this.props.add(this.state); //Passed to from App, using function to give it back
        this.setState({
            title: '',
            details: '',
        })
    }

    render(){
        const {title, details} = this.state;
        return(
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Title</label>
                        <input
                            onChange={(e)=>this.setState({title: e.target.value})}  //single line method, can't do error handling or any other functionality for checking input
                            type="text"
                            value={title}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Details</label>
                        <input
                            onChange={({target})=>this.setState({details: target.value})}
                            type="text"
                            value={details}
                         />
                    </div>
                </div>
                <div className="rov">
                    <div className="col s8 offset-s2 right-align">
                        <button className="btn blue">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;
