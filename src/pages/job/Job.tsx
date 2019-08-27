import React from "react";
import { Link } from 'react-router-dom';
import { Job as JobData } from 'ApiDataTypes';
import Api from "Api";

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
				jobDetails = (
					<div>
						<h2>{job.title}</h2>
						<p dangerouslySetInnerHTML={{ __html: job.description }} />
					</div>
				);
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
					{this.state.jobs.map( job =>
						<div className="col-12 col-s-6 col-m-3">
							<h3>{job.title}</h3>
							<Link to={`/job/${job.id}`} className="btn">More info</Link>
						</div>
					)}
				</div>
			</div>
		);
	}
}