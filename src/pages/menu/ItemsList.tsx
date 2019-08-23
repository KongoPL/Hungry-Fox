import React from "react";
import Icon from 'components/Icon';

import 'scss/pages/menu/ItemsList.scss';

import categoryIcon from 'assets/category-icon.png';


export default class ItemsList extends React.Component {
	render() {
		return (
			<section className="menu-items">
				<h2>Bestsellers</h2>
				<div className="menu-item row align-center bg-white">
					<div className="col-2 image">
						<img src={categoryIcon} alt="" />
					</div>
					<div className="col-7 text">
						<h4>Lorem Ipsum</h4>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis commodo justo eget congue. Proin porta ac urna ut eleifend. Curabitur viverra faucibus magna ut commodo. Phasellus pretium egestas erat, eu semper risus convallis eu. Maecenas eget erat in odio congue convallis. Sed vestibulum sagittis neque. Aliquam sit amet ornare dolor.
					</div>
					<div className="col-3 right-column">
						<h4 className="price">$29,99</h4>

						<a className="btn">
							<Icon name="plus" />
							Add
						</a>
					</div>
				</div>
			</section>
		);
	}
}