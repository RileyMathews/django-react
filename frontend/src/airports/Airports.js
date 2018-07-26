import React, { Component } from 'react'
import Airport from './Airport'


class Airports extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>airports</h1>
                {this.props.airports.map(airport => (
                    <Airport airport={airport} key={parseInt(airport.id, 10)}/>
                ))}
            </React.Fragment>
        )
    }
}

export default Airports
