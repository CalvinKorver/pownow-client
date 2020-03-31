export const addCountryCode = countryCode => ({
  type: 'ADD_COUNTRY_CODE',
  countryCode
})

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

export function fetchProductsSuccess(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    data: data
  }
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error
  }
}

export const startService = (userData) => {
  return function (dispatch) {

    dispatch(fetchProductsPending())
    var body = JSON.stringify({
      phone: userData['phone'],
      area: userData['area'],
      country: userData['countryCode'],
      resort: userData['location'],
      date: userData['date'],
      lifts: userData['lifts']
    })
    console.log(body)
    const URL = 'https://88uok2e6n4.execute-api.us-east-1.amazonaws.com/default/putUsers';
    return fetch(URL, {
      method: 'PUT',
      body: body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-api-key": '5MChd6QE0N8Yj29g3Sxzw29Wswjjanas9NBEsyEg'
      }
    })
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        return res
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if(json.statusCode === '200') {
          dispatch(fetchProductsSuccess(json));
        } else {
          var error = json.body;
          console.log(error)
          dispatch(fetchProductsError(error));
          return error
        }
        return json;
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchProductsError(error));
        return error
      })

  }
}


