import React, { Component } from "react";
import axios from "axios";

import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";

const ADD_TO_CART = "http://localhost:8080/api/cart/";
const ITEMS_URL = "http://localhost:8080/api/items/";


class ItemComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            content:{}
        }
    }

    componentDidMount(){
        this.getContent().then(
            response => {
                this.setState({
                    content: response.data
                })
            },
            error => {
                this.setState({
                    content:
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString()
                })
            }
        )
        
    }4

    getContent(){
        const itemId = "?id=" + this.props.itemId 
        return axios.get(ITEMS_URL + itemId);
    }

    addToCart(){
        const body = {"username":AuthService.getCurrentUser().username, "itemId":this.props.itemId, "quantity":1}
        return axios.post(ADD_TO_CART + 'addToCart', body, { headers: authHeader() })
    }

    render(){
        const item = this.state.content
        const listItem = <h3 >Name is {item.name}, Price is {item.price}, and description is {item.description} </h3>
        return(
            <div>
                {listItem}
                {"  "}
                <button onSubmit={this.addToCart()}>addToCart</button>
            </div>
        )
    }

}

export default ItemComponent