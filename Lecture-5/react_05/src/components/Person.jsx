import { useState } from "react"

function Person({naam}){
    
    const [username,setUsername] = useState(naam)

    function handleNaam(){
        setUsername("Anonymous")
    }

    return(
        <div>
            <h1>Name: {username}</h1>
            <button onClick={handleNaam}>NAAM BADAL DUNGA</button>
        </div>
    )
}

export default Person




// ----------------------------------------------------


// function Person({naam}){
//     let username = naam;
//     function handleNaam(){
//         console.log(username,"before");
    
//         username = "Anonymous"

//         console.log(username,"after");
//     }

//     return(
//         <div>
//             <h1>Name: {username}</h1>
//             {/* <button onClick="handleNaam()" >NAAM BADAL DUNGA</button> DOM */}
//             <button onClick={handleNaam}>NAAM BADAL DUNGA</button>
//         </div>
//     )
// }

// export default Person