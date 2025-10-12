import { useEffect, useState } from "react";

function Online(){
    const [user,setUser] = useState([]);

    useEffect(()=>{
        async function calling(){
            let resp = await fakeFetch('https://example.com/api/users/status')
            // console.log(resp.data.users , "resp");
            setUser(resp.data.users)
        }
        calling()
    },[])

    return(
        <div>
            <h1>Online and Ofline update</h1>
            {
                user.map((item,index)=>{
                    return(
                        // <div style={{color:'green'}} key={index}>
                        <div style={item.status === 'Online' ? {color:"green"} : {color:"red"} }  key={index}>
                            <h1>Name: {item.name} </h1>
                            <h1>Status: {item.status} </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Online;

// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            users: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        })
      }
    }, 2000)
  })
}