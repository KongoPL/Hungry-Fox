import React from "react";
import { StaffMember as StaffMemberType } from 'ApiDataTypes';

import 'scss/pages/staff/StaffMember.scss';

export default class StaffMember extends React.Component<{ data: StaffMemberType, className?: string}>
{
	render()
	{
		let className = "staff-member text-center" + ( " " + this.props.className || "" );

		return (
			<div className={className}>
				<div className="image">
					<img src={this.props.data.imageUrl} alt="John Doe" />
				</div>
				<h3 className="name">{this.props.data.name}</h3>
				<div><b><i>{this.props.data.position}</i></b></div>
				<div>
					{this.props.data.email && <div><a href="mailto:{this.props.data.email}">{this.props.data.email}</a></div>}
					{this.props.data.phone && <div>{this.props.data.phone}</div>}
				</div>
			</div>
		);
	}
}