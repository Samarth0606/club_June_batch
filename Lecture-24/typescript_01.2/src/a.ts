let user = {
    firstName: "Samarth",
    lastName: "Vohra",
    age: 28
}

//WET code
// fn => islegal => 18 age > => true: false
function islegal(user: {
    firstName: string,
    lastName: string,
    age: number
}):boolean{
    return user.age> 18 ? true : false
}
console.log( islegal(user) );







