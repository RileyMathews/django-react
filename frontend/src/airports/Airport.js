import React, { Component } from 'react'


class Airport extends Component {


    render() {
        return (
            <React.Fragment>
                <p key={this.props.airport.key}>{this.props.airport.name}</p>
            </React.Fragment>
        )
    }
}

export default Airport
