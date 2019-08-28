import React from "react";
import { Category } from 'ApiDataTypes';

import 'scss/pages/menu/CategoryItem.scss';

export default class CategoryItem extends React.Component<{ data: Category, onClick?: () => void }>
{
	render()
	{
		const category = this.props.data;

		return (
			<div className="category" onClick={this.props.onClick} >
				<div className="image">
					<img src={category.imageUrl} alt="" />
				</div>
				<div className="name">
					{category.name}
				</div>
			</div>
		);
	}
}

