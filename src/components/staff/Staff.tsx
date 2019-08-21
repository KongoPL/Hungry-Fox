import React from "react";
import StaffMember from "components/staff/StaffMember";


export default class Staff extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Staff</h1>
				<div className="row">
					<StaffMember className="col-2" />
					<StaffMember className="col-2 offset-1" />
					<StaffMember className="col-2 offset-1" />
					<StaffMember className="col-2 offset-1" />
				</div>
				<div className="row">
					<StaffMember className="col-2" />
					<StaffMember className="col-2 offset-1" />
					<StaffMember className="col-2 offset-1" />
					<StaffMember className="col-2 offset-1" />
				</div>
			</div>
		);
	}
}