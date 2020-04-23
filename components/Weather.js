import { Header, Icon, Image, Loader } from "semantic-ui-react"
const Weather = (props) => {

    function precise(x) {
        return Number.parseFloat(x).toPrecision(3);
      }

    const weather = props.weather
    if (weather) {
        let weather_icon
        let color
        const condition = (weather.weather[0]['main']).toLowerCase()
        switch (condition) {
            case 'clear':
                weather_icon = 'sun'
                color='yellow'
                break;
            case 'clouds':
                weather_icon = 'cloud'
                color='grey'
            case 'fog':
                // weather_icon = 'fog-icon'
                weather_icon = 'cloud'
                color='grey'
            case 'rain':
                weather_icon = 'rain'
                color='blue'
            default:
                break;
        }
        let icon = (
        <span id='test' style={{marginRight: '10px !important'}}>
            <Icon name={weather_icon} size='large' color={color} ></Icon>
        </span>
        )
    return (
        <span style={{float: 'right'}}>
                <span style={{ fontWeight: '600', }}>
                    {precise(weather.main.temp)}
                    {'°F'}
                </span>
                <span style={{ fontWeight: '200', marginRight: '8px'  }}>
                    {' and '}
                    {condition}
                </span>
                {icon ? icon : null}
        </span>
    )

    } else {
        return (<Loader/>)
    }
}

export default Weather