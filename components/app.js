import React, { Component } from 'react';
import AddListItem from "../container/additem";
import ItemList from "../container/itemlist";

export default class App extends Component {
  render() {
    return (
      <div>
        <AddListItem/>
        <ItemList/>
      </div>
    );
  }
}
