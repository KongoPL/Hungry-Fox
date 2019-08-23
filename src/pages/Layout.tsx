import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon';
import CartWindow from 'components/CartWindow';

import 'scss/pages/Layout.scss';

import logotype from 'assets/logotype.png';

export default class Layout extends React.Component<{}>
{
	render() {
		return (
			<div id="layout">
				<header id="page" className="bg-primary">
					<div className="container">
						<Icon name="bars" className="menu-mobile show-on-small-and-down" />

						<div className="logo"><NavLink to="/"><img src={logotype} alt="logotype" /></NavLink></div>
						<ul className="menu hide-on-small-and-down">
							<li><NavLink exact to="/" activeClassName="active">Order</NavLink></li>
							<li><NavLink to="/coupons" activeClassName="active">Coupons</NavLink></li>
							<li><NavLink to="/staff" activeClassName="active">Staff</NavLink></li>
							<li><NavLink to="/partners" activeClassName="active">Partners</NavLink></li>
							<li><NavLink to="/job" activeClassName="active">Job</NavLink></li>
							<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
						</ul>
						<div className="float-right">
							<Icon name="shopping-cart" className="shopping-cart" />
							<CartWindow />
						</div>
					</div>
				</header>
				<div className="container" id="page-content">
					{this.props.children}
				</div>

				<footer id="page" className="color-white">
					<div className="pre-footer bg-primary lighten-1">
						<div className="container">
							<div className="row align-center">
								<div className="col-4">
									<b>Our menu</b>
									<div className="row">
										<div className="col-6">
											<ul className="footer-menu-links">
												<li>Category</li>
												<li>Category</li>
												<li>Category</li>
												<li>Category</li>
												<li>Category</li>
											</ul>
										</div>

										<div className="col-6">
											<ul className="footer-menu-links">
												<li>Category</li>
												<li>Category</li>
												<li>Category</li>
												<li>Category</li>
												<li>Category</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="logo text-center"><img src={logotype} alt="logotype" /></div>
								</div>
								<div className="col-4 text-center">
									<Icon name="phone" size="3x" />
									<h3>Order by phone</h3>
									<h2>123 123 123</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-text bg-primary">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="float-left">
										&copy; Created by Jakub Poliszuk
								</div>
									<div className="float-right">
										<a href="https://github.com/KongoPL/Hungry-Fox" target="_blank">
											<Icon name="github" /> Github project
									</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}