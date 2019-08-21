import React from "react";

import 'scss/components/partners/Partners.scss';


import googleGraphic from 'images/partner-google.png';
import githubGraphic from 'images/partner-github.png';
import uberGraphic from 'images/partner-uber.png';


export default class Partners extends React.Component
{
	render()
	{
		return (
			<div className="partners">
				<h1>Partners</h1>
				<div className="row align-center">
					<div className="col-3">
						<img src={googleGraphic} className="partner" alt="Google" />
					</div>
					<div className="col-3">
						<img src={githubGraphic} className="partner" alt="Github" />
					</div>
					<div className="col-3">
						<img src={uberGraphic} className="partner" alt="Uber" />
					</div>
					<div className="col-3">
						<img src={githubGraphic} className="partner" alt="Uber" />
					</div>
				</div>
				<div className="row align-center">
					<div className="col-3">
						<img src={googleGraphic} className="partner" alt="Google" />
					</div>
					<div className="col-3">
						<img src={githubGraphic} className="partner" alt="Github" />
					</div>
					<div className="col-3">
						<img src={uberGraphic} className="partner" alt="Uber" />
					</div>
					<div className="col-3">
						<img src={uberGraphic} className="partner" alt="Uber" />
					</div>
				</div>
			</div>
		);
	}
}