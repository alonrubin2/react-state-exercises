import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '[NAME]',
			restaurant: '[RESTAURANT]',
			meal: '[MEAL]',
			desert: false
		}
	}

	changeName(event) {
		this.setState({
			name: event.target.value
		});
	}
	changeMeal(event) {
		this.setState({
			meal: event.target.value
		})
	}
	changeRestaurant(event) {
		this.setState({
			restaurant: event.target.value
		})
	}
	wantDesert() {
		this.setState({
			desert: !this.state.desert
		})
	}



	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" 
						   onChange={this.changeName.bind(this)}
					/>
				</div>
				<div>
					Choose restaurant:
					<select  onChange={this.changeRestaurant.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" 
						   onChange={this.changeMeal.bind(this)}
					/>
				</div>
				<div>
					Want a desert?
					<input type="checkbox" onClick={this.wantDesert.bind(this)} />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					{ this.state.desert && <div>Additionally, our chef will make a special desert for you!<br /></div>}
				</div>
			</div>
		);
	}
}

export default FoodPicker;