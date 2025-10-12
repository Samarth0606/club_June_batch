Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

a. Add a button, on click of which it displays only the items with more than 20 as quantity.

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}

<!-- ----------------------------- -->



Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.

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

<!-- ----------------------------- -->

Create a React component that fetches users data from an API endpoint using useEffect hook and display users data (name, image, likes, comments) as a list on the screen using the useState hook.

a. Show “Loading…” until your data displays on the DOM.

b. Handle errors by showing an error message on the DOM, in case of any error.

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