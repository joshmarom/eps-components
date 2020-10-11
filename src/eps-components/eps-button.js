import React from 'react';
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import theme from './../eps-theme';

const ErrorButton = withStyles( {
	textPrimary: {
		color: theme.palette.error.main,
		"&:hover": {
			backgroundColor: fade( theme.palette.error.main, theme.palette.action.hoverOpacity ),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedPrimary: {
		color: theme.palette.error.main,
		border: `1px solid ${fade( theme.palette.error.main, 0.5 )}`,
		"&:hover": {
			backgroundColor: fade( theme.palette.error.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${theme.palette.error.dark}`
		},
		"&$disabled": {
			border: `1px solid ${theme.palette.action.disabled}`
		}
	},
	containedPrimary: {
		color: theme.palette.error.contrastText,
		backgroundColor: theme.palette.error.main,
		"&:hover": {
			backgroundColor: theme.palette.error.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.error.main
			}
		}
	},
	disabled: {}
} )( MuiButton ),

SuccessButton = withStyles( {
	textPrimary: {
		color: theme.palette.success.main,
		"&:hover": {
			backgroundColor: fade( theme.palette.success.main, theme.palette.action.hoverOpacity ),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedPrimary: {
		color: theme.palette.success.main,
		border: `1px solid ${fade( theme.palette.success.main, 0.5 )}`,
		"&:hover": {
			backgroundColor: fade( theme.palette.success.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${theme.palette.success.dark}`
		},
		"&$disabled": {
			border: `1px solid ${theme.palette.action.disabled}`
		}
	},
	containedPrimary: {
		color: theme.palette.success.contrastText,
		backgroundColor: theme.palette.success.main,
		"&:hover": {
			backgroundColor: theme.palette.success.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.success.main
			}
		}
	},
	disabled: {}
} )( MuiButton ),

WarningButton = withStyles( {
	textPrimary: {
		'&, .eps-button-textWarning': {
			color: theme.palette.warning.main,
			"&:hover": {
				backgroundColor: fade( theme.palette.warning.main, theme.palette.action.hoverOpacity ),
				"@media (hover: none)": {
					backgroundColor: "transparent"
				}
			}
		}
	},
	outlinedPrimary: {
		color: theme.palette.warning.main,
		border: `1px solid ${fade( theme.palette.warning.main, 0.5 )}`,
		"&:hover": {
			backgroundColor: fade( theme.palette.warning.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${theme.palette.warning.dark}`
		},
		"&$disabled": {
			border: `1px solid ${theme.palette.action.disabled}`
		}
	},
	containedPrimary: {
		color: theme.palette.warning.contrastText,
		backgroundColor: theme.palette.warning.main,
		"&:hover": {
			backgroundColor: theme.palette.warning.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.warning.main
			}
		}
	},
	disabled: {}
} )( MuiButton ),

InfoButton = withStyles( {
	textPrimary: {
		color: theme.palette.info.main,
		"&:hover": {
			backgroundColor: fade( theme.palette.info.main, theme.palette.action.hoverOpacity ),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedPrimary: {
		color: theme.palette.info.main,
		border: `1px solid ${fade( theme.palette.info.main, 0.5 )}`,
		"&:hover": {
			backgroundColor: fade( theme.palette.info.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${theme.palette.info.dark}`
		},
		"&$disabled": {
			border: `1px solid ${theme.palette.action.disabled}`
		}
	},
	containedPrimary: {
		color: theme.palette.info.contrastText,
		backgroundColor: theme.palette.info.main,
		"&:hover": {
			backgroundColor: theme.palette.info.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.info.main
			}
		}
	},
	disabled: {}
} )( MuiButton ),

StatusButtons = {
	error: ErrorButton,
	success: SuccessButton,
	warning: WarningButton,
	info: InfoButton,
};

/*const styles = theme => ({
	textError: {
		color: theme.palette.error.main,
		"&:hover": {
			backgroundColor: fade( theme.palette.error.main, theme.palette.action.hoverOpacity ),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedError: {
		color: theme.palette.error.main,
		border: `1px solid ${ fade( theme.palette.error.main, 0.5 ) }`,
		"&:hover": {
			backgroundColor: fade( theme.palette.error.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${ theme.palette.error.dark }`
		},
		"&$disabled": {
			border: `1px solid ${ theme.palette.action.disabled }`
		}
	},
	containedError: {
		color: theme.palette.error.contrastText,
		backgroundColor: theme.palette.error.main,
		"&:hover": {
			backgroundColor: theme.palette.error.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.error.main
			}
		}
	},
	textSuccess: {
		color: theme.palette.success.main,
		"&:hover": {
			backgroundColor: fade( theme.palette.success.main, theme.palette.action.hoverOpacity ),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedSuccess: {
		color: theme.palette.success.main,
		border: `1px solid ${ fade( theme.palette.success.main, 0.5 ) }`,
		"&:hover": {
			backgroundColor: fade( theme.palette.success.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${ theme.palette.success.dark }`
		},
		"&$disabled": {
			border: `1px solid ${ theme.palette.action.disabled }`
		}
	},
	containedSuccess: {
		color: theme.palette.success.contrastText,
		backgroundColor: theme.palette.success.main,
		"&:hover": {
			backgroundColor: theme.palette.success.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.success.main
			}
		}
	},
	textWarning: {
		color: theme.palette.warning.main,
		"&:hover": {
			backgroundColor: fade( theme.palette.warning.main, theme.palette.action.hoverOpacity ),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedWarning: {
		color: theme.palette.warning.main,
		border: `1px solid ${ fade( theme.palette.warning.main, 0.5 ) }`,
		"&:hover": {
			backgroundColor: fade( theme.palette.warning.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${ theme.palette.warning.dark }`
		},
		"&$disabled": {
			border: `1px solid ${theme.palette.action.disabled}`
		}
	},
	containedWarning: {
		color: theme.palette.warning.contrastText,
		backgroundColor: theme.palette.warning.main,
		"&:hover": {
			backgroundColor: theme.palette.warning.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.warning.main
			}
		}
	},
	textInfo: {
		color: theme.palette.info.main,
		"&:hover": {
			backgroundColor: fade(theme.palette.info.main, theme.palette.action.hoverOpacity),
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		}
	},
	outlinedInfo: {
		color: theme.palette.info.main,
		border: `1px solid ${ fade( theme.palette.info.main, 0.5 ) }`,
		"&:hover": {
			backgroundColor: fade( theme.palette.info.main, theme.palette.action.hoverOpacity ),
			border: `1px solid ${ theme.palette.info.dark }`
		},
		"&$disabled": {
			border: `1px solid ${ theme.palette.action.disabled }`
		}
	},
	containedInfo: {
		color: theme.palette.info.contrastText,
		backgroundColor: theme.palette.info.main,
		"&:hover": {
			backgroundColor: theme.palette.info.dark,
			"@media (hover: none)": {
				backgroundColor: theme.palette.info.main
			}
		}
	},

	// This is required for the '&$disabled' selector to work
	disabled: {}
});*/

const Button = ( props ) => {
	const color = props.color,
	isStatus = 'error' === color || 'success' === color || 'warning' === color || 'info' === color,
		StatusButton = isStatus ? StatusButtons[ color ] : MuiButton,
		colorProp = isStatus ? 'primary' : color;
	return (
		<StatusButton  { ...props } color={ colorProp } >{ props.children }</StatusButton>
	);
};

export default Button;
