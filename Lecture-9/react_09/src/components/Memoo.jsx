import { memo, useState } from "react";

function Memoo(){
    const [username,setUsername] = useState("Samarth")
    function changeNaam(){
        setUsername( Math.floor(Math.random()*10 ))
    }
    return(
        <div>
            <Chotu naam={username} />
            <button onClick={changeNaam} >Naam badal dunga</button>
            <Chotu naam="Maverick" />
            <Chotu naam="Kashish" />
            <Chotu naam="Simba" />
        </div>
    )
}
const Chotu = memo( function({naam}){
    return(
        <div>
            <h1>Hello : {naam}</h1>
        </div>
    )
} )

export default Memoo;