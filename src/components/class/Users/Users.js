import React from "react";
import Profile from "../Profile/Profile";

export default class Users extends React.Component{
    state={
        users: [{
            nickname: 'a',
            age: 1,
            exp: 1,
            id: 1
        },
        {
            nickname: 'b',
            age: 2,
            exp: 2,
            id: 2
        },
        {
            nickname: 'c',
            age: 3,
            exp: 3,
            id: 3
        },
        {
            nickname: 'd',
            age: 4,
            exp: 4,
            id: 4
        },
        {
            nickname: 'e',
            age: 5,
            exp: 5,
            id: 5
        }
    ],
        count: 5
    }


    render(){
        return (
            <>
                <Profile users={this.state.users}/>
            </>
        )
    }
}