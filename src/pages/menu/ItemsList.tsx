import React from "react";

import { Item } from "ApiDataTypes";
import MenuItem from "pages/menu/MenuItem";


export default class ItemsList extends React.Component<{ id?: string, categoryName: string, items: Item[], onAddToCart?: ( item: Item ) => void }>
{
	render()
	{
		let items = [];

		for ( let item of this.props.items )
			items.push( <MenuItem data={item} key={item.id} onAddToCart={() => this.onAddToCart( item )} /> );

		return (
			<section className="menu-items" id={this.props.id}>
				<h2>{this.props.categoryName}</h2>
				{items}
			</section>
		);
	}


	private onAddToCart( item: Item )
	{
		if ( typeof this.props.onAddToCart == 'function' )
			this.props.onAddToCart( item );
	}
}