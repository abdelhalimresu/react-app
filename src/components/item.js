import React, { Component } from 'react'

class Item extends Component {

    constructor(props) {
        super();
        this.state = { article: { name: props.name }, quantity: props.quantity } ;
        console.log(props);
    }

    state = {
        quantity: 0,
        article: {
            name: "Cat",
            price: 99.5
        }
    }

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                {/* <span>{this.state.article.price}</span> */}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
                <button className="btn bnt-secondary btn-sm" onClick={this.handleIncrement}>
                    <i className="fa fa-plus" />
                </button>
            </div>
        )
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        return  classes += this.state.quantity === 0 ? "warning" : "primary";
    }

    formatQuantity() {
        const { quantity } = this.state;
        return quantity === 0 ? "Zero" : quantity.toLocaleString();
    }

    handleIncrement = () => {
        this.setState({quantity: this.state.quantity + 1});
    }
}

export default Item;