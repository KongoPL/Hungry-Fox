import React from "react";

import { Item } from "ApiDataTypes";
import MenuItem from "pages/menu/MenuItem";


export default class ItemsList extends React.Component<{ categoryName: string, items: Item[] }>
{
	render()
	{
		let items = [];

		for ( let item of this.props.items )
			items.push( <MenuItem data={item} key={item.id} /> );


		return (
			<section className="menu-items">
				<h2>{this.props.categoryName}</h2>
				{items}
			</section>
		);
	}
}