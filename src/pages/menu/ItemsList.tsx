import React from "react";
import Icon from 'components/Icon';

import 'scss/pages/menu/ItemsList.scss';

import { Item } from "ApiDataTypes";


export default class ItemsList extends React.Component<{ categoryName: string, items: Item[] }>
{
	render()
	{
		let items = [];

		for ( let item of this.props.items )
			items.push(
				<div className="menu-item align-center bg-white">
					<div className="row no-margin">
						<div className="col-m-7 offset-m-2"><h4>{item.name}</h4></div>
					</div>
					<div className="row">
						<div className="col-12 col-m-2 image">
							<img src={item.imageUrl} alt="" />
						</div>
						<div className="col-12 col-m-7 text" dangerouslySetInnerHTML={{ __html: item.description }}></div>
						<div className="col-12 col-m-3 right-column">
							<h4 className="price">{item.priceFormatted}</h4>

							<a className="btn">
								<Icon name="plus" />
								Add
							</a>
						</div>
					</div>
				</div>
			);


		return (
			<section className="menu-items">
				<h2>{this.props.categoryName}</h2>
				{items}
			</section>
		);
	}
}