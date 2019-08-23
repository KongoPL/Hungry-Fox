 import React from "react";

import 'scss/pages/coupons/Coupon.scss';

import saleGraphic from 'assets/sale-graphic.png';


export default class Coupon extends React.Component<{ className?: string }>
{
	render()
	{
		let className = 'coupon';

		if (typeof this.props.className == "string")
			className += ' ' + this.props.className;

		return (
			<div className={className}>
				<div className="row align-center">
					<div className="col-12 col-l-4 image">
						<img src={saleGraphic} alt="Sale graphic" />
					</div>
					<div className="col-12 col-l-8 text">
						<h2>Summer madness</h2>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta.
					</div>
				</div>
			</div>
		);
	}
}