 import React from 'react';

export default class SummaryConfirmation extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Thank you for your order!</h1>
				<div className="text-center">
					<h2>Approximated waiting time:</h2>
					<h1>60:59</h1>
					<b>Order ID: #61654</b><br />
					<br />
					If food doesn't arrive within given time,<br />
					contact with us: <a href="mailto:contact@johndoe.com">contact@johndoe.com</a><br />
					or make a call: +48 123 123 123.<br />
					<br />
					However, take into account that I'm just a mock page.
				</div>
			</div>
		);
	}
}