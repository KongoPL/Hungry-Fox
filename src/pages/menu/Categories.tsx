import React from "react";
import { Category } from 'ApiDataTypes';

import 'scss/pages/menu/Categories.scss';
import CategoryItem from "pages/menu/CategoryItem";

export default class Categories extends React.Component<{ categories: Category[], onCategoryChange?: ( categoryId: number ) => void }>
{

	render()
	{
		const categories = this.props.categories.map( ( category ) =>
			<CategoryItem data={category} onClick={() => this.onCategoryClick( category.id )} key={category.id} />
		);

		return (
			<header className="menu-categories">
				{categories}
			</header>
		);
	}


	onCategoryClick( categoryId )
	{
		if ( typeof this.props.onCategoryChange == 'function' )
			this.props.onCategoryChange( categoryId );
	}
}