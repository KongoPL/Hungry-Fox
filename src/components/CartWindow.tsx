import React from 'react';
import OrderSummary from 'components/OrderSummary';

import 'scss/components/CartWindow.scss';
import { NavLink } from 'react-router-dom';

export default class CartWindow extends React.Component<{id?:string}>
{
	render()
	{
		return (
			<div className="cart-window" id={this.props.id}>
				<div className="clearfix"></div>
				<OrderSummary displayOrderButton />
			</div>
		);
	}
}