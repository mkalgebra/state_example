import { useState } from "react"

export default function Ranking({exp}){
    const [lvl, setLvl] = useState(exp);

    function handleClick(){
        setLvl(lvl+1)
    }

    return(
        <>
            <div>
                <span>{lvl}</span>
                <button onClick={handleClick}>Lvl up!</button>
            </div>
        </>
    )
}