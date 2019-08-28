import React from "react";
import { Category } from 'ApiDataTypes';

import 'scss/pages/menu/CategoryItem.scss';

export default class CategoryItem extends React.Component<{ data: Category }>
{
	render()
	{
		const category = this.props.data;

		return (
			<div className="category">
				<div className="image">
					<img src={category.imageUrl} />
				</div>
				<div className="name">
					{category.name}
				</div>
			</div>
		);
	}
}

