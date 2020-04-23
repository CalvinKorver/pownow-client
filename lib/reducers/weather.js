const weather = (state = null, action) => {
    switch(action.type) {
        case 'ADD_WEATHER_DATA':
            return {
                ...state,
                weather: action.weather
            }
        default: 
            return state;
    }
}

export default weather