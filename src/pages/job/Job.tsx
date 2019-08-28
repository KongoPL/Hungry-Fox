import React from "react";
import { Job as JobData } from 'ApiDataTypes';
import Api from "Api";
import JobDetails from "pages/job/JobDetails";
import JobItem from "pages/job/JobItem";

export default class Job extends React.Component<{ match: any }, { jobs: JobData[] }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			jobs: []
		};
	}

	componentDidMount()
	{
		Api.getJobOffers().then( jobs => this.setState( { jobs } ) );
	}

	render()
	{
		const jobId = this.props.match.params.id;
		let jobDetails;

		if ( jobId )
		{
			const job = this.state.jobs.find( ( v ) => v.id == jobId );

			if ( job )
				jobDetails = <JobDetails data={job} />;
		}


		return (
			<div>
				<h1>Job</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.<br />
					<br />
					<b>To apply just send us your CV at <a href="mailto:job@hungry-fox.com">job@hungry-fox.com</a></b>
				</p>

				{jobDetails}

				<div className="row align-center text-center">
					{this.state.jobs.map( job => <JobItem className="col-12 col-s-6 col-m-3" data={job} /> )}
				</div>
			</div>
		);
	}
}