import React, { Component } from 'react';

/**
 * Here is a working counter. Add more features to it:
 * 1. User can't have go below 0
 * 2. User can't go above 20
 * 3. Add another button "increase 10" which will increase the counter by 10 (if it's above limit, then set to the limit)
 */

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
	}

	increase() {
		if (this.state.num >= 20) {
			return;
		}
		this.setState({
			num: this.state.num + 1
		});
	}

	decrease() {
		if (this.state.num <= 0) {
			return;
		}
		this.setState({
			num: this.state.num - 1
		});
	}
	increaseBy10() {
		if (this.state.num >= 10) {
			this.setState({
				num: 20
			});
			return;
		}
		this.setState({
			num: this.state.num + 10
		});
	}

	render() {
		return (
			<div>
				<h1>Counter: </h1>
				<button onClick={this.increase.bind(this)}>Increase</button>
				<button onClick={this.decrease.bind(this)}>Decrease</button>
				<button onClick={this.increaseBy10.bind(this)}>Increase By 10</button>
				<span>{this.state.num}</span>
				<div>DONE</div>
			</div>
		);
	}
}

export default Counter;























