import React from "react";

import 'scss/pages/menu/Categories.scss';

import categoryIcon from 'assets/category-icon.png';



export default class Categories extends React.Component
{
	render()
	{
		const categories = [];

		for (let i = 0; i < 8; i++)
			categories.push(
			<div className="category">
				<div className="image">
					<img src={categoryIcon} />
				</div>
				<div className="name">
					Category
					</div>
			</div>);

		return (
			<header className="menu-categories">
				{categories}
			</header>
		);
	}
}