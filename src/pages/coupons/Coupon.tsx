import React from "react";
import { Coupon as CouponType } from 'ApiDataTypes';

import 'scss/pages/coupons/Coupon.scss';

export default class Coupon extends React.Component<{ data: CouponType, className?: string }>
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
						<img src={this.props.data.imageUrl} alt="Sale graphic" />
					</div>
					<div className="col-12 col-l-8 text">
						<h2>{this.props.data.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: this.props.data.description }} />
					</div>
				</div>
			</div>
		);
	}
}