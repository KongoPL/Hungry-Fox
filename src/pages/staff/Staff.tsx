import React from "react";
import StaffMember from "pages/staff/StaffMember";

export default class Staff extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Staff</h1>
				<div className="row">
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2" />
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2 offset-l-1" />
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2 offset-l-1" />
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2 offset-l-1" />

					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2" />
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2 offset-l-1" />
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2 offset-l-1" />
					<StaffMember className="col-6 col-s-4 col-m-3 col-l-2 offset-l-1" />
				</div>
			</div>
		);
	}
}