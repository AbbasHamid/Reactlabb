import React, { Component } from 'react';

class Employee extends Component {
	render() {
		return (
			<div>
				<div
					className="card"
					style={{ width: '250px', backgroundColor: 'black', color: 'white', margin: '20px 10px' }}
				>
					<div className="card-header">
						<img src={this.props.img} style={{ maxWidth: '100%', border: 'solid white 5px' }} />
					</div>
					<div className="card-body">
						<h4>{this.props.namn}</h4>
						<h6>{this.props.jobb}</h6>
						<p>phone: {this.props.phone}</p>
						<p>Email: {this.props.mail}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Employee;
