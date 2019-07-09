import Item from "./item"
import React, { Component } from 'react'


class Items extends Component {

    state = {
        items: [
            {id: 1, name: "Cat", quantity: 2},
            {id: 2, name: "Cup", quantity: 1},
            {id: 3, name: "Heap", quantity: 0},
            {id: 4, name: "Nap", quantity: 0},
        ]
    };

    render() { 
        return ( 
            <div>{this.state.items.map(item => (<Item name={item.name} quantity={item.quantity} key={item.id}/>))}</div>
         );
    }
}

export default Items;