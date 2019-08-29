import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Transition } from 'react-transition-group';

import Api from 'Api';
import Icon from 'components/Icon';
import OrderSummary from 'components/OrderSummary';
import Cart from 'Cart';
import i18n from "i18next";

import { Category } from 'ApiDataTypes';

import 'scss/pages/Layout.scss';

import logotype from 'assets/logotype.png';


export default class Layout extends React.Component<{}, { showMenu: boolean, showBackground: boolean, showCart: boolean, categories: Category[], cartItemsCount: number }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			showMenu: false,
			showBackground: false,
			showCart: false,
			categories: [],
			cartItemsCount: 0
		};
	}

	componentDidMount()
	{
		document.querySelectorAll( '#menu li a' ).forEach( ( v ) => v.addEventListener( 'click', () => this.activateMenu( false ) ) );

		document.querySelector( '#page-content' ).addEventListener( 'click', () => this.activateCartWindow( false ) );
		document.querySelector( 'footer#page' ).addEventListener( 'click', () => this.activateCartWindow( false ) );

		Api.getCategories().then( ( categories ) => this.setState( { categories } ) );

		Cart.onCartUpdate.listen( () => this.setState( { cartItemsCount: Cart.itemsCount } ) );
	}

	render() {

		return (
			<div id="layout">
				<header id="page" className="bg-primary fixed">
					<div className="container">
						<a href="#" onClick={() => this.activateMenu()}>
							<Icon name="bars" className="menu-mobile show-on-small-and-down" />
						</a>

						<div className="logo"><NavLink to="/"><img src={logotype} alt="logotype" /></NavLink></div>
						<ul className="menu" id="menu" >
							<li><NavLink exact to="/" activeClassName="active">{i18n.t( `Order` )}</NavLink></li>
							<li><NavLink to="/coupons" activeClassName="active">Coupons</NavLink></li>
							<li><NavLink to="/staff" activeClassName="active">Staff</NavLink></li>
							<li><NavLink to="/partners" activeClassName="active">Partners</NavLink></li>
							<li><NavLink to="/job" activeClassName="active">Job</NavLink></li>
							<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
						</ul>
						<div className="float-right">
							<a onClick={() => this.activateCartWindow()} className="shopping-cart">
								<Icon name="shopping-cart" />
								{this.state.cartItemsCount > 0 && <span className="items-count">{this.state.cartItemsCount}</span>}
							</a>
							<div className="cart-window" id="cartWindow">
								<div className="clearfix"></div>
								<OrderSummary displayOrderButton onOrder={() => this.activateCartWindow( false )} />
							</div>
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
									<ul className="footer-menu-links row">
										{this.state.categories.map( ( category ) => (
											<li className="col-6" key={category.id}>
												<HashLink exact="true" to={`/#category-${category.id}`}>{category.name}</HashLink>
											</li>
										) )}
									</ul>
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
				<Transition in={this.state.showBackground} timeout={500}>
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
		if ( typeof activate == 'undefined' )
			activate = !this.state.showMenu;

		this.allowScrollingDocument( activate );

		const menu = document.getElementById( 'menu' );

		this.elementHeightAnimation( menu, activate );

		if ( activate )
			menu.classList.add( 'scroll-vertical-auto' );
		else
			menu.classList.remove( 'scroll-vertical-auto' );

		this.setState( { showMenu: activate, showBackground: activate } );
	}


	allowScrollingDocument( value: boolean )
	{
		if ( value )
			document.body.classList.add( 'no-scroll' );
		else
			document.body.classList.remove( 'no-scroll' );
	}


	elementHeightAnimation( element: HTMLElement, show: boolean )
	{
		if ( show )
		{
			element.style.height = 'auto';

			let height = element.offsetHeight;

			element.style.height = '0px';

			setTimeout( () => element.style.height = height + 'px', 0 );
		}
		else
			element.style.height = '0px';
	}


	activateCartWindow( activate?: boolean )
	{
		if ( typeof activate == 'undefined' )
			activate = !this.state.showCart;

		const cartWindow = document.getElementById( 'cartWindow' ),
			shoppingCartLink = document.querySelector( '.shopping-cart' );

		// show: active, then scroll-vertical-auto
		// hide: scroll-vertical-auto (rem), then active (rem)

		if ( activate )
		{
			cartWindow.classList.add( 'active' );

			shoppingCartLink.classList.add( 'active' );
		}
		else
		{
			cartWindow.classList.remove( 'scroll-vertical-auto' );

			shoppingCartLink.classList.remove( 'active' );
		}

		setTimeout( () => this.elementHeightAnimation( cartWindow, activate ), 0 );
		setTimeout( () =>
		{
			if ( activate )
				cartWindow.classList.add( 'scroll-vertical-auto' );
			else
				cartWindow.classList.remove( 'active' );
		}, 500 );

		this.setState( { showCart: activate } );
	}


	setFloatingHeader( value: boolean )
	{
		const header = document.querySelector( 'header#page' );

		if ( value )
			header.classList.add( 'fixed' );
		else
			header.classList.remove( 'fixed' );
	}
}