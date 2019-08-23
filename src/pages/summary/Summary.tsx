import React from 'react';
import OrderSummary from 'components/OrderSummary';

export default class Summary extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Order summary</h1>

				<div className="row">
					<div className="col-7">
						<form>
							<div className="row">
								<div className="col-6">
									<div className="form-input required">
										<label htmlFor="name">Name</label>
										<input type="text" id="name" />
									</div>
								</div>
								<div className="col-6">
									<div className="form-input required">
										<label htmlFor="phone">Phone number</label>
										<input type="text" id="phone" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="form-input required">
										<label htmlFor="street">Street</label>
										<input type="text" id="street" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="form-input required">
										<label htmlFor="buildingNumber">Building no.</label>
										<input type="text" id="buildingNumber" />
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
										<label htmlFor="name">Name</label>
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
					<div className="col-4 offset-1">
						<OrderSummary />
					</div>
				</div>
			</div>
		);
	}
}