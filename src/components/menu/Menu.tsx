import React from "react";

import 'scss/components/menu/Categories.scss';

import Categories from 'components/menu/Categories';
import ItemsList from 'components/menu/ItemsList';


export default class Menu extends React.Component
{
	render()
	{
		return (
			<div>
				<Categories />
				<ItemsList />
			</div>
		);
	}
}