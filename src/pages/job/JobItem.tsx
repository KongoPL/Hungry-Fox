import React from 'react';
import { NavLink } from 'react-router-dom';
import i18n from "i18next";


import { Job } from 'ApiDataTypes';


export default class JobItem extends React.Component<{ className?: string, data: Job }>
{
	render()
	{
		const className = this.props.className || null;

		return (
			<div className={className}>
				<h3>{this.props.data.title}</h3>
				<NavLink exact to={`job/${this.props.data.id}`} className="btn">{i18n.t( `More info` )}</NavLink>
			</div>
		);
	}
}