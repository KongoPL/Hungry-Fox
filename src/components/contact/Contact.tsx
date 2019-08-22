import React from "react";

export default class Contact extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Contact</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui nisi, vestibulum nec sapien eget, molestie molestie mauris. Nullam est libero, dictum nec orci vel, lacinia porttitor ex. Morbi vitae cursus nisl. Mauris eget pulvinar lacus, nec iaculis nisi. Integer eu turpis nulla. Phasellus eget lectus rutrum, auctor nibh porta, sagittis urna. Praesent diam nunc, rutrum ut lorem eu, viverra fringilla felis. Mauris at sem sem. Donec porta gravida sapien, id condimentum diam sollicitudin sed.
				</p>

				<form>
					<div className="form-input">
						<label htmlFor="email">Email address</label>
						<input type="email" id="email" placeholder="joe@example.com" />
					</div>
					<div className="form-input">
						<label htmlFor="name">Your name</label>
						<input type="text" id="name" placeholder="Joe" />
					</div>
					<div className="form-input">
						<label htmlFor="message">Message</label>
						<textarea id="message"></textarea>
					</div>
					<button className="btn">Send message</button>
				</form>
			</div>
		);
	}
}