import React from 'react';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';

import '../assets/lib/eicons/css/elementor-icons.min.css';

export default function Eicon( props ) {
	const iconClass = props.icon ? `eicon-${props.icon}` : '';
	return (
		<Icon {...props} className={ clsx( iconClass, props.className ) } />
	);
}

