import React from "react";
import Coupon from "pages/coupons/Coupon";
import { Coupon as CouponType } from 'ApiDataTypes';
import Api from "Api";

export default class Coupons extends React.Component<{}, { coupons: CouponType[] }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			coupons: []
		};
	}

	componentDidMount()
	{
		Api.getCoupons().then( ( coupons ) => this.setState( { coupons } ) );
	}


	render()
	{
		const groupedCoupons = this.getGroupedCoupons();
		const couponsRows = [];

		for ( let coupons of groupedCoupons )
		{
			couponsRows.push( <div className="row">
				<Coupon data={coupons[0]} className="col-5" />
				{coupons[1] && <Coupon data={coupons[1]} className="col-5 offset-1" />}
			</div> );
		}


		return (
			<div>
				<h1>Coupons</h1>
				{couponsRows}
			</div>
		);
	}


	private getGroupedCoupons(): CouponType[][]
	{
		const groupedCoupons = [];

		for ( let i = 0; i < this.state.coupons.length; i += 2 )
		{
			groupedCoupons.push( [
				this.state.coupons[i],
				this.state.coupons[i + 1] || null,
			] );
		}


		return groupedCoupons;
	}
}