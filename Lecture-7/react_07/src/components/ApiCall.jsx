import {useEffect, useState } from "react";
import axios from 'axios';

function ApiCall(){
    const [apiData,setApiData] = useState([]);
   useEffect(function(){

    // axios with async await
        async function calling(){
            const API = 'https://jsonplaceholder.typicode.com/todos';
            let resp = await axios.get(API);
            // console.log(resp.data, "resp");
            setApiData(resp.data)
        }
        calling()

    // axios with promise
        // function calling(){
        //     const API = 'https://jsonplaceholder.typicode.com/todos';
        //     axios.get(API)
        //     .then((data)=>{ setApiData(data.data)})
        // }
        // calling()

    // fetch with async await
        // async function calling(){
        //     const API = 'https://jsonplaceholder.typicode.com/todos';
        //     let resp = await fetch(API) 
        //     let finalData = await resp.json()
        //     // console.log(finalData , "then");
        //     setApiData(finalData)
        // }
        // calling()

    // fetch with promise
        // function calling(){
        //     const API = 'https://jsonplaceholder.typicode.com/todos';
        //     fetch(API) 
        //     .then( function(resp){ 
        //         return resp.json() 
        //     } )
        //     .then( function(data){ setApiData(data) } )
        //     .catch( function(err){ console.log(err , "error") } )
        // }
        // calling()
        
   }, [])

    return(
        <div>
            {
                // apiData.map((item,index)=>{
                apiData.map((item)=>{
                    return(
                        // <div key={index} >
                        <div key={item.id} >
                            <h1>ID:  {item.id} </h1>
                            <h1>TITLE: {item.title} </h1>
                            <h1>COMPLETED: {JSON.stringify(item.completed)} </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiCall;