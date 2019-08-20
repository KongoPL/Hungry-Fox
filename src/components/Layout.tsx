import React from 'react';

import logotype from 'images/logotype.png';
import Icon from 'components/Icon';
import 'scss/components/layout/Layout.scss';

export default class Layout extends React.Component<{}>
{
	render() {
		return (
			<div>
				<header id="page" className="bg-primary">
					<div className="container">
						<div className="logo"><img src={logotype} alt="logotype" /></div>
						<ul className="menu">
							<li>Order</li>
							<li>Coupons</li>
							<li>Staff</li>
							<li>Partners</li>
							<li>Job</li>
							<li>Contact</li>
						</ul>
						<div className="float-right">
							<Icon name="shopping-cart" className="shopping-cart" />
						</div>
					</div>
				</header>
				<div className="container">
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
											<Icon name="github" /> Github Project
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