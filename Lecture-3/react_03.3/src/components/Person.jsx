// function Person(props){
//     console.log(props , "props"); //object
    
//     return(
//         <div>
//             <h1>Name: {props.naam}</h1>
//             <h1>Age: {props.umar}</h1>
//             <h1>FavColor: {props.favColor}</h1>
//             <h1>isMale: { JSON.stringify(props.isMale) } </h1>
//         </div>
//     )
// }

// export default Person

// -----------------------------------------


function Person({naam,umar,favColor,isMale}){
    
    return(
        <div>
            <h1>Name: {naam}</h1>
            <h1>Age: {umar}</h1>
            <h1>FavColor: {favColor}</h1>
            <h1>isMale: { JSON.stringify(isMale) } </h1>
        </div>
    )
}

export default Person
