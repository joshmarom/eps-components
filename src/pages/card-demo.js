import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
const classes = {};

classes.elements = makeStyles((theme) => ({
	button: {
		'&, xxx': {
			fontSize: theme.spacing(2),
		}
	},
	header: {
		'&, xxx__header': {
			color: 'red',
		}
	},
	body: {
		'&, xxx__body': {
			color: 'green',
		}
	},
	footer: {
		'&, xxx__footer': {
			color: 'blue',
		}
	},
}), { name: 'eps-card' } );

classes.modifiers = {
	size: makeStyles((theme) => ({
		sm: {
			'&, xxx--size-sm': {
				fontSize: theme.spacing( 1 ),
				padding: theme.spacing( 2 ),
			}
		},
		md: {
			'&, xxx--size-md': {
				fontSize: theme.spacing( 2 ),
				padding: theme.spacing( 3 ),
			}
		},
		lg: {
			'&, xxx--size-lg': {
				fontSize: theme.spacing( 3 ),
				padding: theme.spacing( 5 ),
			}
		},
	}), { name: 'eps-card' } ),
	status: makeStyles((theme) => ({
		happy: {
			'&, xxx--status-happy': {
				backgroundColor: 'lightpink',
			}
		},
		sad: {
			'&, xxx--status-sad': {
				backgroundColor: theme.palette.common.black,
			}
		}
	}), { name: 'eps-card' } ),
};

const EpsCard = ( props ) => {
	const elements = classes.elements(),
		sizeClasses = classes.modifiers.size(),
		statusClasses = classes.modifiers.status(),
		modifierClasses = classNames( sizeClasses[ props.size ], statusClasses[ props.status ], elements.button );

	return (
		<div className={ modifierClasses }>
			<div className={ elements.header }>
				Header
			</div>
			<div className={ elements.body }>
				Body
			</div>
			<div className={ elements.footer }>
				Footer
			</div>
		</div>
	)
};

export default EpsCard;
