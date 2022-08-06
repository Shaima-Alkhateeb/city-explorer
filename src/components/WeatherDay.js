import React from "react";


class WeatherDay extends React.Component {
    render() {
        return(
            <>
            <div>{this.props.singleDay.date} : {this.props.singleDay.descriptioin}</div>

            </>
        )
    }
}

export default WeatherDay;