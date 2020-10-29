import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';

import UserService from "../services/user.service";
import ItemComponent from "./item.component";


// const ADD_TO_CART = "http://localhost:8080/api/cart/";
// const ITEMS_URL = "http://localhost:8080/api/items/";


export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            content: {}
        }
    }

    componentDidMount(){
        UserService.getPublicContent().then(
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
        
    }

    render(){
        const items   = this.state.content
        const listItems = Object.keys(items).map((key,i)  => <li key={i}>
                                                                <Link to="/item">
                                                                Item {items[key]["id"]} 
                                                                </Link>
                                                                <Route path="/item" render={(props) => (
                                                                    <ItemComponent {...props} itemId={items[key]["id"]} />
                                                                )}/>
                                                            </li>)

        return (
            <div className="container">
              <header className="jumbotron">
                <ul>
                  { listItems }  
                </ul>
              </header>
            </div>
        )
    }

}