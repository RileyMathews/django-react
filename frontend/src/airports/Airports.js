import React, { Component } from 'react'


class Airports extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>airports</h1>
                {this.props.airports.forEach(airport => (
                    <p>{airport.name}</p>
                ))}
            </React.Fragment>
        )
    }
}

export default Airports
