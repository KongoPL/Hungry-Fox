import React from "react";
import Icon from 'components/Icon';

import 'scss/pages/menu/ItemsList.scss';

import categoryIcon from 'assets/category-icon.png';


export default class ItemsList extends React.Component {
	render() {
		return (
			<section className="menu-items">
				<h2>Bestsellers</h2>
				<div className="menu-item align-center bg-white">
					<div className="row no-margin">
						<div className="col-m-7 offset-m-2"><h4>Lorem Ipsum</h4></div>
					</div>
					<div className="row">
						<div className="col-12 col-m-2 image">
							<img src={categoryIcon} alt="" />
						</div>
						<div className="col-12 col-m-7 text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis commodo justo eget congue. Proin porta ac urna ut eleifend. Curabitur viverra faucibus magna ut commodo. Phasellus pretium egestas erat, eu semper risus convallis eu. Maecenas eget erat in odio congue convallis. Sed vestibulum sagittis neque. Aliquam sit amet ornare dolor.
						</div>
						<div className="col-12 col-m-3 right-column">
							<h4 className="price">$29,99</h4>

							<a className="btn">
								<Icon name="plus" />
								Add
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}