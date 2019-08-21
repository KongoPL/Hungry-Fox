import React from "react";
import Coupon from "./Coupon";

export default class Coupons extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Coupons</h1>
				<div className="row">
					<Coupon className="col-5" />
					<Coupon className="col-5 offset-1" />
				</div>
				<div className="row">
					<Coupon className="col-5" />
					<Coupon className="col-5 offset-1" />
				</div>
			</div>
		);
	}
}