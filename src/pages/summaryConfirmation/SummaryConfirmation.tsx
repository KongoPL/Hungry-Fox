import React from 'react';
import i18n from "i18next";


export default class SummaryConfirmation extends React.Component<{}, { timeLeft: number }>
{
	private timeLeftInterval;

	constructor( props )
	{
		super( props );

		this.state = {
			timeLeft: 1800
		};
	}

	componentDidMount()
	{
		this.timeLeftInterval = setInterval( () =>
		{
			this.tick();
		}, 1000 );
	}

	componentWillUnmount()
	{
		clearInterval( this.timeLeftInterval );
	}

	componentDidUpdate()
	{
		if ( this.state.timeLeft <= 0 )
			clearInterval( this.timeLeftInterval );
	}


	private tick()
	{
		this.setState( (state) => ({
			timeLeft: state.timeLeft - 1
		} ) );
	}


	render()
	{
		return (
			<div>
				<h1>{i18n.t( `Thank you for your order!` )}</h1>
				<div className="text-center">
					<h2>{i18n.t( `Approximated waiting time` )}:</h2>
					<h1>{this.getTimeLeft()}</h1>
					<b>{i18n.t( `Order ID` )}: #61654</b><br />
					<br />
					{i18n.t( `If your order doesn't arrive within given time,` )}<br />
					{i18n.t( `contact with us` )}: <a href="mailto:contact@hungry-fox.com">contact@johndoe.com</a><br />
					{i18n.t( `or make a call` )}: <b>+48 123 123 123</b>.<br />
					<br />
					{i18n.t( `However, take into account that I'm just a mock page.` )}
				</div>
			</div>
		);
	}


	private getTimeLeft()
	{
		let minutes = Math.floor( this.state.timeLeft / 60 ),
			seconds: number | string = this.state.timeLeft - minutes * 60;

		if ( seconds < 10 )
			seconds = '0' + seconds;
		
		return `${minutes}:${seconds}`;
	}
}