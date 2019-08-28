import React from "react";
import Api from "Api";

export default class Contact extends React.Component<{}, { form: { email?: string, name?: string, message?: string } }>
{
	constructor( props )
	{
		super( props );

		this.state = {
			form: {
				email: '',
				name: '',
				message: ' '
			}
		};
	}

	render()
	{
		return (
			<div>
				<h1>Contact</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.
				</p>

				<form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.sendForm(e)}>
					<div className="form-input required">
						<label htmlFor="email">Email address</label>
						<input type="email" id="email" name="email" value={this.state.form.email} placeholder="joe@example.com" required />
					</div>
					<div className="form-input required">
						<label htmlFor="name">Your name</label>
						<input type="text" id="name" name="name" value={this.state.form.name} placeholder="Joe" required />
					</div>
					<div className="form-input required">
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" value={this.state.form.message} required></textarea>
					</div>
					<button className="btn">Send message</button>
				</form>
			</div>
		);
	}


	private handleChange( event )
	{
		const formField = event.target;

		this.setState( ( state ) =>
		{
			state.form[formField.name] = formField.value;

			return state;
		} );
	}


	private sendForm( event )
	{
		event.preventDefault();

		console.log( this.state.form );

		Api.sendMessage( this.state.form.email, this.state.form.name, this.state.form.message ).then( () =>
		{
			alert( "Thank you for your message, we will contact with you soon!" );
		} );
	}
}