import React from 'react';
import { Job } from 'ApiDataTypes';


export default class JobDetails extends React.Component<{ data: Job }>
{
	render()
	{
		return (
			<div>
				<h2>{this.props.data.title}</h2>
				<p dangerouslySetInnerHTML={{ __html: this.props.data.description }} />
			</div>
		);
	}
}