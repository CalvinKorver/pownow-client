const userData = (state = '', action) => {
    switch(action.type) {
        case 'ADD_PHONE':
            return Object.assign({}, state, {
                phone: action.phone
              })
        case 'ADD_AREA':
            return Object.assign({}, state, {
                area: action.area
              })
        case 'ADD_LOCATION':
            return Object.assign({}, state, {
               location: action.location
            })
        case 'ADD_DATE':
            return Object.assign({}, state, {
                date: action.date
            })
        case 'ADD_LIFTS':
            return Object.assign({}, state, {
                lifts: action.lifts
            })
        
        default:
            return state
    }
}


export default userData