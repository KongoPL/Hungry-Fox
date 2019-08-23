import React from "react";

import 'scss/pages/menu/Categories.scss';

import categoryIcon from 'assets/category-icon.png';



export default class Categories extends React.Component
{
	render()
	{
		return (
			<header className="menu-categories">
				<div className="category">
					<div className="image">
						<img src={categoryIcon} />
					</div>
					<div className="name">
						Category
					</div>
				</div>
				<div className="category">
					<div className="image">
						<img src={categoryIcon} />
					</div>
					<div className="name">
						Category
					</div>
				</div>
				<div className="category">
					<div className="image">
						<img src={categoryIcon} />
					</div>
					<div className="name">
						Category
					</div>
				</div>
				<div className="category">
					<div className="image">
						<img src={categoryIcon} />
					</div>
					<div className="name">
						Category
					</div>
				</div>
			</header>
		);
	}
}