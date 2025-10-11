function EmployeeCard( {name,desig,exp} ){
    return(
        <div>
            <h1>Name: {name}  </h1>
            <h1 style={{color: "green", backgroundColor: "yellow"}}>Desi:    {desig} </h1>
            <h1 style={{color: "blue", fontSize:"50px"}} >Work Ex: {exp}   </h1>
        </div>
    )
}

export default EmployeeCard;