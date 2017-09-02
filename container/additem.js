import React, {Component} from "react";
import {addTodoItem} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
 
class AddListItem extends Component{
    constructor(props){
        super(props);
        this.state = {toDoItem: ""};
        this.onSubmit= this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.addTodoItem(this.state.toDoItem);
        this.setState({term:""});

    }
    onInputChange(event){

        this.setState({toDoItem: event.target.value});
    
    }
    render(){
        return (
        <div>
            <form onSubmit=  {this.onSubmit} className="additem-form">
                <input onChange=  {this.onInputChange} />
                <button onClick ={this.onSubmit} className="form-button">Add Item</button>
            </form>
        </div>
        )
    }
}


function mapDisptachToProps(dispatch){
    return bindActionCreators({addTodoItem}, dispatch)
}
export default connect (null, mapDisptachToProps) (AddListItem);