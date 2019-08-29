import React from 'react';
import i18n from "i18next";

export default class PageNotFound extends React.Component
{
	render()
	{
		return (
			<div className="text-center">
				<h1>{i18n.t( `Page not found :(` ) }</h1>
				<b>{i18n.t( `Sorry, that sometimes happens.` )}</b><br />
				{i18n.t( `If you think it shouldn't, contact with us` )}: <a href="mailto:webmaster@hungry-fox.com">webmaster@gmail.com</a>
			</div>
		);
	}
}