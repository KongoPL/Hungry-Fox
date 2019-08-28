import React from "react";
import Categories from 'pages/menu/Categories';
import ItemsList from 'pages/menu/ItemsList';
import Api from 'Api';

import { Category, CategoriesItems, Item } from "ApiDataTypes";

import 'scss/pages/menu/Categories.scss';
import Cart from "Cart";


export default class Menu extends React.Component<{}, { categories: Category[], categoriesItems: CategoriesItems }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			categories: [],
			categoriesItems: {},
		};
	}

	componentDidMount()
	{
		Api.getCategories().then( ( categories ) => this.setState( { categories } ) );
		Api.getItems().then( ( categoriesItems ) => this.setState( { categoriesItems } ) );
	}


	render()
	{
		let itemsLists = [];

		for ( let id in this.state.categoriesItems )
		{
			const categoryItems = this.state.categoriesItems[id];

			itemsLists.push( <ItemsList id={`category-${id}`} categoryName={categoryItems.categoryName} items={categoryItems.items} onAddToCart={this.onAddToCart.bind( this )} key={id} /> );
		}

		return (
			<div>
				<Categories categories={this.state.categories} onCategoryChange={this.onCategoryChange.bind( this )} />
				{itemsLists}
			</div>
		);
	}


	onCategoryChange( selectedCategory: number )
	{
		const scrollItem = document.querySelector( `#category-${selectedCategory}` );

		scrollItem.scrollIntoView();
	}


	onAddToCart( item: Item )
	{
		Cart.addItem( item );
	}
}