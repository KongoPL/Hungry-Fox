import React from 'react';

/**
 * Usefull links:
 * List: https://fontawesome.com/icons
 * Sizes: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
*/

export default class Icon extends React.Component<{name: string, size?: string, className?: string}>
{
	render() {
		let className = `fa fa-${this.props.name}`;

		if (typeof this.props.size == 'string')
			className += ` fa-${this.props.size}`;

		if (typeof this.props.className == 'string')
			className += ` ${this.props.className}`;

		return (
			<i className={className}></i>
		);
	}
}