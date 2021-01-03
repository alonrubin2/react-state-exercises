import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

//  second click on the same board does not turn it back to blue border.
// before, with 2 different functions it did go back to the original color with second click, however
// first click on any board gave no response and a first click on any other board reset that situation.
//  which one is better and more correct and is there a way to make it all run more smoothly?

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isRed1: false,
			isRed2: false,
			isRed3: false,
			borderColor1: '#6495ee',	
			borderColor2: '#6495ee',
			borderColor3: '#6495ee'
		}
	}
	
	changeisRed1() {
		this.setState({
			isRed1: !this.state.isRed1,
			isRed2: this.state.isRed1,
			isRed3: this.state.isRed1,
			borderColor1: 'red',
			borderColor2: '#6495ee',
			borderColor3: '#6495ee'
		});
		// this.changeBorderColor1();
}

	changeisRed2() {
		this.setState({
			isRed2: !this.state.isRed2,
			isRed1: this.state.isRed2,
			isRed3: this.state.isRed2,
			borderColor2: 'red',
			borderColor1: '#6495ee',
			borderColor3: '#6495ee'
		});
		// this.changeBorderColor2();
}

	changeisRed3() {
		this.setState({
			isRed3: !this.state.isRed3,
			isRed2: this.state.isRed3,
			isRed1: this.state.isRed3,
			borderColor3: 'red',
			borderColor2: '#6495ee',
			borderColor1: '#6495ee'
		});
		// this.changeBorderColor3();
	}

	// changeBorderColor1() {
	// 	if (this.state.isRed1) {
	// 		this.setState({
	// 			borderColor1: 'red',
	// 			borderColor2: '#6495ee',
	// 			borderColor3: '#6495ee'
	// 		})
	// }else {
	// 	this.setState({
	// 		borderColor1: '#6495ee',
	// 		borderColor2: '#6495ee',
	// 		borderColor3: '#6495ee'
	// 	})
	// }

	// }

	// changeBorderColor2() {
	// 	if (this.state.isRed2) {
	// 		this.setState({
	// 			borderColor2: 'red',
	// 			borderColor1: '#6495ee',
	// 			borderColor3: '#6495ee'
	// 		})
	// }else {
	// 	this.setState({
	// 		borderColor1: '#6495ee',
	// 		borderColor2: '#6495ee',
	// 		borderColor3: '#6495ee'
	// 	})
	// }
	// }

	// changeBorderColor3() {
	// 	if (this.state.isRed3) {
	// 		this.setState({
	// 			borderColor3: 'red',
	// 			borderColor2: '#6495ee',
	// 			borderColor1: '#6495ee'
	// 		})
	// }else {
	// 	this.setState({
	// 		borderColor1: '#6495ee',
	// 		borderColor2: '#6495ee',
	// 		borderColor3: '#6495ee'
	// 	})
	// }
	// }

	




	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div className="Board-option" onClick={this.changeisRed1.bind(this)} 
							style={{borderColor: this.state.borderColor1}}>
								1
					</div>
					<div className="Board-option" onClick={this.changeisRed2.bind(this)} 
							style={{borderColor: this.state.borderColor2}}>
								2
					</div>
					<div className="Board-option" onClick={this.changeisRed3.bind(this)} 
							style={{borderColor: this.state.borderColor3}}>
								3
					</div>
				</div>
			</div>
		);
	}
}

export default Board;




// may try and abstract color names to var 'color' and pass it through the functions
