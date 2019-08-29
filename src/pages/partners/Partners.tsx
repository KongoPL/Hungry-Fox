import React from "react";
import i18n from "i18next";

import 'scss/pages/partners/Partners.scss';


export default class Partners extends React.Component
{
	render()
	{
		return (
			<div className="partners">
				<h1>{i18n.t( `Partners` )}</h1>
				<div className="row align-center">
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-google.png" className="partner" alt="Google" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-github.png" className="partner" alt="Github" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-uber.png" className="partner" alt="Uber" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-github.png" className="partner" alt="Uber" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-google.png" className="partner" alt="Google" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-github.png" className="partner" alt="Github" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-uber.png" className="partner" alt="Uber" />
					</div>
					<div className="col-6 col-s-4 col-m-3">
						<img src="/images/partner-uber.png" className="partner" alt="Uber" />
					</div>
				</div>
			</div>
		);
	}
}