export const addPhone = phone => ({
  type: 'ADD_PHONE',
  phone
})

export const addArea = area => ({
  type: 'ADD_AREA',
  area
})

export const addDate = date => ({
  type: 'ADD_DATE',
  date
})

export const addLocation = location => ({
  type: 'ADD_LOCATION',
  location
})

export const addLifts = lifts => ({
  type: 'ADD_LIFTS',
  lifts
})

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products
  }
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error
  }
}


export const postUsers = (userData) => {
  console.log(userData)
  const URL = 'https://88uok2e6n4.execute-api.us-east-1.amazonaws.com/default/putUsers';
  return fetch(URL, {
    method: 'PUT',
    // mode: 'cors',
    body: JSON.stringify({
      phone: userData['phone'],
      resort: userData['resort'],
      date: userData['date'],
      lifts: userData['lifts']
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      
      console.log(res.json())
      if (res.error) {
        throw (res.error);
      }
      return res
    })
    .then(res => res.json())
    .then(json => {
      console.log('in res')
      console.log(json)
      fetchProductsSuccess(json);
      return json;
    })
    .catch(error => {
      console.log(error)
      fetchProductsError(error);
      return error
    })
}


