import React from 'react';
import Icon from 'components/Icon';
import OrderSummary from 'components/OrderSummary';

import 'scss/components/CartWindow.scss';

export default class CartWindow extends React.Component
{
	render()
	{
		let items = [];

		for (let i = 0; i < 3; i++)
			items.push(<tr>
				<td className="name">Lorem Ipsum</td>
				<td className="price">$26.90</td>
				<td className="quantity">x<input type="text" value="10" className="text-center" /></td>
				<td className="actions">
					<Icon name="times" />
				</td>
			</tr>);

		return (
			<div className="cart-window">
				<div className="clearfix"></div>
				<OrderSummary />
				<a className="btn float-right">Order</a>
			</div>
		);
	}
}