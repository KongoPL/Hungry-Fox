import React from "react";
import StaffMember from "pages/staff/StaffMember";
import { StaffMember as StaffMemberType } from 'ApiDataTypes';
import Api from "Api";
import i18n from "i18next";

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
			const className = 'col-6 col-s-4 col-m-3 col-l-3',
				member = this.state.staffMembers[i];

			staffMembers.push( <StaffMember data={member} className={className} key={member.id} /> );
		}

		return (
			<div>
				<h1>{i18n.t( `Staff` )}</h1>
				<div className="row">
					{staffMembers}
				</div>
			</div>
		);
	}
}