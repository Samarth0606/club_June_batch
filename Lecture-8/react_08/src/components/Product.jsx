import { useEffect, useState } from "react"

function Product(){

    const [product,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);


    useEffect(()=>{
        function calling(){
            fakeFetch('https://example.com/api/users')
            .then((resp)=>{
                setProducts(resp.data)
                setLoading(false)
            })
            .catch((err)=>{
                setError(true)
                setLoading(false)
            })
        }
        calling()
    },[])

    if(loading){
        return <h1>Loadingg.....</h1>
    }
    if(error){
        return <h1>Error.....</h1>
    }

    return(
        <div>
            {
                product.map((item,index)=><div key={index}>
                    <img width={50} height={75} src={item.image} />
                    <h1>{item.name}</h1>
                    <h1>{item.likes}</h1>
                    <h1>{item.comments}</h1>
                </div>)
            }
        </div>
    )
}

export default Product

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Saroj',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 500,
              comments: 10,
            },
            {
              name: 'Meeta',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 200,
              comments: 1,
            },
            {
              name: 'Alia',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 100,
              comments: 5,
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'users data not found.',
        })
      }
    }, 2000)
  })
}