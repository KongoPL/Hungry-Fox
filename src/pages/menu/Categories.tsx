import React from "react";
import { Category } from 'ApiDataTypes';

import 'scss/pages/menu/Categories.scss';

export default class Categories extends React.Component<{ categories: Category[] }>
{
	render()
	{
		const categories = this.props.categories.map( ( category ) => (
			<div className="category" key={category.id}>
				<div className="image">
					<img src={category.imageUrl} />
				</div>
				<div className="name">
					{category.name}
				</div>
			</div>
		) );

		return (
			<header className="menu-categories">
				{categories}
			</header>
		);
	}
}