function Profile(props){
    console.log(props , "props");
    
    return(
        <div>
            <h1>Profile</h1>
            <span>Name: {props.name} </span>
            <span>Age:   {props.age} </span>
            <span>isMale: {JSON.stringify(props.isMale)} </span>
        </div>
    )
}

export default Profile;