import React from 'react';
import OrderSummary from 'components/OrderSummary';
import { Redirect } from 'react-router';
import Cart from 'Cart';

export default class Summary extends React.Component<{}, { formSubmitted?: boolean }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			formSubmitted: false
		};
	}

	componentDidUpdate()
	{
		if ( this.state.formSubmitted )
			Cart.empty();
	}

	render()
	{
		return (
			<div>
				{this.state.formSubmitted && <Redirect exact to="/summaryConfirmation" />}

				<h1>Order summary</h1>

				<div className="row">
					<div className="col-12 col-l-4 push-l-8">
						<OrderSummary />
					</div>
					<div className="col-12 col-l-7 pull-l-4">
						<h3>Order details</h3>
						<form onSubmit={this.tryToSubmitForm.bind( this )}>
							<div className="row">
								<div className="col-6">
									<div className="form-input required">
										<label htmlFor="name">Name</label>
										<input type="text" id="name" required />
									</div>
								</div>
								<div className="col-6">
									<div className="form-input required">
										<label htmlFor="phone">Phone number</label>
										<input type="text" id="phone" required />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="form-input required">
										<label htmlFor="street">Street</label>
										<input type="text" id="street" required />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="form-input required">
										<label htmlFor="buildingNumber">Building no.</label>
										<input type="text" id="buildingNumber" required />
									</div>
								</div>
								<div className="col-6">
									<div className="form-input">
										<label htmlFor="apartmentNumber">Apartment no.</label>
										<input type="text" id="apartmentNumber" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="form-input">
										<label htmlFor="paymentMethod">Payment method</label>
										<select id="paymentMethod">
											<option>Online transfer</option>
											<option>Cash</option>
											<option>Credit card</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="form-input">
										<label htmlFor="name">Comments to order</label>
										<textarea></textarea>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<button className="btn">Order</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}


	private tryToSubmitForm( event )
	{
		event.preventDefault();

		if ( Cart.isEmpty )
			alert( "Your cart is empty! Please order something first!" );
		else
			this.setState( { formSubmitted: true } );
	}
}