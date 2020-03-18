const phone = (state = '', action) => {
    switch(action.type) {
        case 'ADD_PHONE':
            return Object.assign({}, state, {
                phone: action.phone
              })
        case 'ADD_AREA':
            return Object.assign({}, state, {
                area: action.area
              })
        default:
            return state
    }
}

export default phone