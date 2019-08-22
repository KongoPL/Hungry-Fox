import React from 'react';
import Icon from 'components/Icon';

import 'scss/components/OrderSummary.scss';

export default class OrderSummary extends React.Component {
	render() {
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
			<div className="order-summary">
				<h3>Your order</h3>
				<table className="order-items table">
					{items}
				</table>
				<hr />
				<div className="total text-right">
					Total: <h3 className="total-price">$80.70</h3>
				</div>
			</div>
		);
	}
}