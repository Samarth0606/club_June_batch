// function Shadi(props){
//     console.log(props);
    
//     return(
//         <div>
//             <h1>Shadi of: {props.name}</h1>
//         </div>
//     )
// }
// export default Shadi;

// ----------------------------------

function Shadi({name,age}){
    
    return(
        <div>
            <h1>Shadi of: {name}, {age}</h1>
        </div>
    )
}
export default Shadi;