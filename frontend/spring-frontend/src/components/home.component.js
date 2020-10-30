import React, { Component } from "react";
import { Link } from 'react-router-dom';

import UserService from "../services/user.service";


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
        const listItems = Object.keys(items).map(
                                                (key,i)  => <li key={i}>
                                                <Link to={{pathname:`/item/${items[key]["id"]}`, state:{itemId:items[key]["id"]}}}>
                                                Item {items[key]["id"]} 
                                                </Link>
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