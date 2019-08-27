import React from "react";
import StaffMember from "pages/staff/StaffMember";
import { StaffMember as StaffMemberType } from 'ApiDataTypes';
import Api from "Api";

export default class Staff extends React.Component<{}, { staffMembers: StaffMemberType[] }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			staffMembers: []
		};
	}

	componentDidMount()
	{
		Api.getStaff().then( ( staffMembers ) => this.setState( { staffMembers } ) );
	}

	render()
	{
		const staffMembers = [];

		for ( let i = 0; i < this.state.staffMembers.length; i++ )
		{
			const className = 'col-6 col-s-4 col-m-3 col-l-3';

			staffMembers.push( <StaffMember data={this.state.staffMembers[i]} className={className} /> );
		}

		return (
			<div>
				<h1>Staff</h1>
				<div className="row">
					{staffMembers}
				</div>
			</div>
		);
	}
}