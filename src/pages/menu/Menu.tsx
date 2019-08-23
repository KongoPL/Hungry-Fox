import React from "react";
import Categories from 'pages/menu/Categories';
import ItemsList from 'pages/menu/ItemsList';

import 'scss/pages/menu/Categories.scss';

export default class Menu extends React.Component {
	render() {
		return (
			<div>
				<Categories />
				<ItemsList />
			</div>
		);
	}
}