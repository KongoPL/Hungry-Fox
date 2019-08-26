import React from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import Icon from 'components/Icon';
import CartWindow from 'components/CartWindow';

import 'scss/pages/Layout.scss';

import logotype from 'assets/logotype.png';

export default class Layout extends React.Component<{}, { showMenu: boolean }>
{
	constructor( props )
	{
		super( props );

		this.state = { showMenu: false };
	}

	componentDidMount()
	{
		document.querySelectorAll( '#menu li a' ).forEach( ( v ) => v.addEventListener( 'click', () => this.activateMenu( false ) ) );
	}

	render() {

		return (
			<div id="layout">
				<header id="page" className="bg-primary">
					<div className="container">
						<a href="#" onClick={() => this.activateMenu()}><Icon name="bars" className="menu-mobile show-on-small-and-down" /></a>

						<div className="logo"><NavLink to="/"><img src={logotype} alt="logotype" /></NavLink></div>
						<ul className="menu" id="menu">
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
								<div className="col-6 col-m-4">
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
								<div className="col-6 col-m-4 push-m-4 text-center">
									<Icon name="phone" size="3x" />
									<h3 className="no-margin">Order by phone</h3>
									<h2 className="no-margin margin-top-15">123 123 123</h2>
								</div>

								<div className="col-12 col-m-4 pull-m-4">
									<div className="logo text-center"><img src={logotype} alt="logotype" /></div>
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
				<Transition in={this.state.showMenu} timeout={500}>
					{( state ) => ( <div className="menu-background" id="menuBackground" onClick={() => this.activateMenu( false )} style={{
						...{
							transition: `opacity 500ms ease-in-out`,
							opacity: 0,
							height: `0px`
						},
						...( {
							entering: { height: `100%`, opacity: 1 },
							entered: { height: `100%`, opacity: 1 },
							exiting: { height: `100%` },
						})[state]
					}} />)}
				</Transition>
			</div>
		);
	}


	activateMenu( activate?: boolean )
	{
		const menu = document.getElementById( 'menu' ),
			background = document.getElementById( 'menuBackground' ),
			header = document.querySelector( 'header#page' );
		 
		if ( typeof activate == 'undefined' )
			activate = !this.state.showMenu;

		if ( activate )
		{
			document.body.classList.add( 'no-scroll' );
			header.classList.add( 'fixed' );
			menu.classList.add( 'scroll-vertical-auto' );

			// Menu height animation:
			menu.style.height = 'auto';

			let height = menu.offsetHeight;

			menu.style.height = '0px';

			setTimeout( () => menu.style.height = height + 'px', 0 );
		}
		else
		{
			document.body.classList.remove( 'no-scroll' );
			header.classList.remove( 'fixed' );
			menu.classList.remove( 'scroll-vertical-auto' );

			// Menu height animation:
			menu.style.height = '0px';
		}

		this.setState( { showMenu: activate } );
	}
}