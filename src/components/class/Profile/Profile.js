import React from "react";
import Ranking from "../../function/Ranking/Ranking";
import "./Profile.css"

export default class Profile extends React.Component{
    state = {user: this.props.users[0], currentIndex: 0}

    showPrev = () => {
        const {currentIndex} = this.state

        this.setState({
            user: this.props.users[currentIndex-1],
            currentIndex: currentIndex-1
        })
    }

    showNext = () => {
        const {currentIndex} = this.state

        this.setState({
            user: this.props.users[currentIndex+1],
            currentIndex: currentIndex+1
        })
    }


    render(){
        const {users} = this.props
        
        return (
            <>
                <ul>
                    {users.map(i=><li key={i.id}>{i.nickname}</li>)}
                </ul>
                <div className="c-profile">
                    <p>Nickname: {this.state.user.nickname}</p>
                    <p>Age: {this.state.user.age}</p>
                    <Ranking key={this.state.user.exp} exp={this.state.user.exp}/>
                </div>
                <button disabled={this.state.currentIndex===0} onClick={this.showPrev}>Prev</button>
                <button disabled={this.state.currentIndex===users.length-1} onClick={this.showNext}>Next</button>
            </>
        )
    }
}