const userData = (state = {lifts: lifts}, action) => {
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


const lifts = [
        { liftName: 'KT22 Express', liftDifficulty: 'black', checked: false},
        { liftName: 'Headwall Express', liftDifficulty: 'black', checked: false },
        { liftName: 'Siberia Express', liftDifficulty: 'black', checked: false },
        { liftName: 'Gold Coast Express', liftDifficulty: 'green', checked: false },
        { liftName: 'Emigrant', liftDifficulty: 'black', checked: false },
        { liftName: 'Big Blue Express', liftDifficulty: 'green', checked: false },
        { liftName: 'Solitude', liftDifficulty: 'blue', checked: false },
        { liftName: 'Granite Chief', liftDifficulty: 'black', checked: false },
        { liftName: 'Broken Arrow', liftDifficulty: 'black', checked: false  },
        { liftName: 'Silverado', liftDifficulty: 'black', checked: false }
    ]


export default userData