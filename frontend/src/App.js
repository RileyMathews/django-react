import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Airports from './airports/Airports'

class App extends Component {
	state = {
		airports: [{
			'name': 'BNA'
		}]
	}

	componentDidMount() {
		fetch('http://127.0.0.1:8000/api/airport.json')
			.then(r => r.json())
			.then(airports => {
				this.setState({ airports: airports })
			})
	}

	render() {
		return (
			<div>
				<Airports airports={this.state.airports}/>
			</div>
		);
	}
}

export default App;
