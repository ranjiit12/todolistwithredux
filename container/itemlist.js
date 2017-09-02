import React, {Component} from "react";
import {connect} from "react-redux";

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {todoitems: this.props.addItem};
        this.itemCompleted = this.itemCompleted.bind(this);
    }

    renderList(){
        if(!this.props.listItems[0]){
            <h4>You haven't added anything yet.</h4>
        } 
        
        return this.props.listItems.map(item => {
            const randomId = _.random(10,10001);
            return <li 
                    key={item} className="todo-list-item" id={`${item}${randomId}`}>
                        <span className="todo-list-content">
                        {item}</span>
                        <span className="icone-container">
                            <i className="fa fa-check" aria-hidden="true" onClick={this.itemCompleted}></i>
                            <i className="fa fa-trash-o" aria-hidden="true" ></i>
                        </span>
                </li>
        });}
    
    itemCompleted(event){
     let iconeContainer = event.target.parentNode;
     let todoItem = iconeContainer.parentNode; 
     let todoItems = this.props.addItem;
     console.log(todoItem.value);
    //  var index = todoItem.indexOf(todoItem);
     this.setState({todoitems: todoItems});
     todoItem.setAttribute("style", " text-decoration: line-through");
     

    }
    render(){
        return <ul className="todo-container">
                 {this.renderList()}
               </ul>
    }
}
function mapStateToProps(state){
    return {listItems:state.addItem}
}
export default connect (mapStateToProps) (ListItem);