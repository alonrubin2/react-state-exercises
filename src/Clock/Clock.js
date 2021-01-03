import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time:  new Date()
		};
	}

	updateTime() {
			this.setState({
				time: new Date()
			})
	}
	componentWillMount() {
		setInterval(() => {
			this.updateTime()
		}, 1000);
	}

	render() {
		return (
			<div>
				<h1>Clock</h1>
				The time is: {this.state.time.toLocaleTimeString()}
			</div>
		);
	}
}

export default Clock;