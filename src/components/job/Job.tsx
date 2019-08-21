import React from "react";
import { Link } from 'react-router-dom';



import 'scss/components/partners/Partners.scss';




export default class Job extends React.Component<{ match: any}>
{
	render()
	{
		return (
			<div>
				<h1>Job</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.
				</p>

				{this.props.match.params.id &&
				<div>
					<h2>Frontend Developer</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.
					</p>
				</div>}
				

				<div className="row align-center text-center">
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
				</div>
				<div className="row align-center text-center">
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
					<div className="col-3">
						<h3>Frontend Developer</h3>
						<Link to="job/1" className="btn">More info</Link>
					</div>
				</div>
			</div>
		);
	}
}