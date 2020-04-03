const initialState = {
    isMobileFromSSR: {},
    deviceInfo: {}
}

const device = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_DEVICE':
            console.log('Adding device...')
            console.log(action);
            return {
                ...state,
                isMobileFromSSR: action.isMobileFromSSR,
                deviceInfo: {
                    mobile: action.mobile,
                    tablet: action.tablet,
                    os: action.os,
                    userAgent: action.userAgent
                }
            }
        default: 
            return state;
    }
}

export default device