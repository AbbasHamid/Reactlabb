import React, { Component } from 'react';
import Employee from './Employee';

class EmployeeList extends Component {
	constructor() {
		super();
		this.state = {
			members: [
				{
					img: 'https://picsum.photos/200',
					namn: 'Abbas Abdulzahra',
					jobb: 'Programmer',
					mail: 'Abbasab@kth.se',
					phone: '0762282520'
				},
				{
					img: 'https://picsum.photos/200',
					namn: 'Abbas Abdulzahra',
					jobb: 'Programmer',
					mail: 'Abbasab@kth.se',
					phone: '0762282520'
				},
				{
					img: 'https://picsum.photos/200',
					namn: 'Abbas Abdulzahra',
					jobb: 'Programmer',
					mail: 'Abbasab@kth.se',
					phone: '0762282520'
				}
			],
			membersinfo: [],
			counter: 0
		};

		this.clickevent = this.clickevent.bind(this);
	}

	clickevent() {
		if (this.state.counter < this.state.members.length) {
			this.state.membersinfo.push(this.state.members[this.state.counter]);

			this.setState(function(c) {
				return {
					counter: c.counter + 1
				};
			});

			this.AllMembers = this.state.membersinfo.map(function(objekt) {
				return (
					<Employee
						img={objekt.img}
						namn={objekt.namn}
						jobb={objekt.jobb}
						phone={objekt.phone}
						mail={objekt.mail}
					/>
				);
			});
		}
	}

	render() {
		let oldmembers = this.state.members.map(function(objekt) {
			return (
				<Employee
					img={objekt.img}
					namn={objekt.namn}
					jobb={objekt.jobb}
					phone={objekt.phone}
					mail={objekt.mail}
				/>
			);
		});

		return (
			<div>
				<button
					onClick={this.clickevent}
					className="btn btn-dark"
					style={{ height: '50px', margin: '20px', marginLeft: '50%' }}
				>
					New Member
				</button>

				<ul className="row">
					{this.AllMembers}
					{oldmembers}
				</ul>
			</div>
		);
	}
}

export default EmployeeList;
