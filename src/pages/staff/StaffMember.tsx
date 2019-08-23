import React from "react";

import 'scss/pages/staff/StaffMember.scss';

import memberGraphic from 'assets/staff-member.jpg';


export default class StaffMember extends React.Component<{ className?: string}>
{
	render()
	{
		let className = "staff-member text-center " + (this.props.className || "");

		return (
			<div className={className}>
				<div className="image">
					<img src={memberGraphic} alt="John Doe" />
				</div>
				<h3 className="name">John Doe</h3>
				<div><b><i>Sales manager</i></b></div>
				<div>
					<a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a><br />
					+48 123 123 123
				</div>
			</div>
		);
	}
}