import React from 'react';
import Icon from 'components/Icon';
import Cart, { CartItem } from 'Cart';
import { NavLink } from 'react-router-dom';

import 'scss/components/OrderSummary.scss';


export default class OrderSummary extends React.Component<{ displayOrderButton?: boolean, onOrder?: () => void }, { items: CartItem[] }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			items: []
		};
	}


	componentDidMount()
	{
		this.setState( {
			items: Cart.getItems()
		} );

		Cart.onCartUpdate.listen( () =>
		{
			this.setState( {
				items: Cart.getItems()
			} );
		} );
	}


	render()
	{
		let items = [];

		for ( let item of this.state.items )
			items.push(
				<tr key={item.item.id}>
					<td className="name">{item.item.name}</td>
					<td className="price"><b>{item.item.priceFormatted}</b></td>
					<td className="quantity">x<input type="text" value={item.quantity} className="text-center" onChange={this.changeItemQuantity.bind( this, item.item.id )} /></td>
					<td className="actions">
						<a onClick={this.deleteItem.bind( this, item.item.id )}><Icon name="times" /></a>
					</td>
				</tr>
			);

		let orderContent;

		if ( items.length > 0 )
			orderContent =
				<div>
					<table className="order-items table">
						<tbody>
							{items}
						</tbody>
					</table>
					<hr />
					<div className="total text-right">
						Total: <h3 className="total-price">{Cart.totalValue}</h3>
				</div>
				{this.props.displayOrderButton ? <NavLink exact to="/summary" className="btn float-right" onClick={this.props.onOrder}>Order</NavLink> : null}
				</div>;
		else
			orderContent =
				<div>
					<i>Your cart is empty</i>
				</div>;

		return (
			<div className="order-summary">
				<h3>Your order</h3>
				{orderContent}
			</div>
		);
	}


	changeItemQuantity( itemId, event )
	{
		const quantity = parseInt( event.target.value );

		Cart.updateQuantity( itemId, quantity );
	}


	deleteItem( itemId )
	{
		Cart.removeItem( itemId );
	}
}