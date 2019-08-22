import React from 'react';

export default class PageNotFound extends React.Component
{
	render()
	{
		return (
			<div className="text-center">
				<h1>Page not found :(</h1>
				<b>Sorry, this sometimes happens.</b><br />
				If you think it shouldn't, contact with us: <a href="mailto:webmaster@gmail.com">webmaster@gmail.com</a>
			</div>
		);
	}
}