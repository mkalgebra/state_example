import { useState } from "react";
import "./Greetings.css"

export default function Greetings(){
    const msgEnum = {
        hi: 'Koliko jos',
        bye: 'Gotovi smo'
    }

    const noteEnum ={
        empty: 'Hocemo li jos dugo',
        note: 'Slobodni ste'
    }

    const [msg, setMsg] = useState(msgEnum.hi)
    const [note, setNote] = useState(noteEnum.empty)

    function handleClick(){
        setMsg(msgEnum.bye)
        setNote(noteEnum.note)
    }

    function reset(){
        setMsg(msgEnum.hi)
        setNote(noteEnum.empty)
    }

    return(
        <>
            <p>{msg}</p>
            {msg===msgEnum.hi ? <button onClick={handleClick}>Bye!</button> : <button onClick={reset}>Reset!</button>}
            <p>{note}</p>
        </>
    )
}