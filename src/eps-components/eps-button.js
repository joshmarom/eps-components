import React from 'react';
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import theme from './../eps-theme';

const buttonTheme = ( color ) => {
	const buttonColor = theme.palette[ color ];
	return {
		textPrimary: {
			color: buttonColor.main,
			"&:hover": {
				backgroundColor: fade( buttonColor.main, theme.palette.action.hoverOpacity ),
				"@media (hover: none)": {
					backgroundColor: "transparent"
				}
			}
		},
		outlinedPrimary: {
			color: buttonColor.main,
			border: `1px solid ${fade( buttonColor.main, 0.5 )}`,
			"&:hover": {
				backgroundColor: fade( buttonColor.main, theme.palette.action.hoverOpacity ),
				border: `1px solid ${buttonColor.dark}`
			},
			"&$disabled": {
				border: `1px solid ${theme.palette.action.disabled}`
			}
		},
		containedPrimary: {
			color: buttonColor.contrastText,
			backgroundColor: buttonColor.main,
			"&:hover": {
				backgroundColor: buttonColor.dark,
				"@media (hover: none)": {
					backgroundColor: buttonColor.main
				}
			}
		},
		disabled: {}
	}
},
StatusButtons = {
	error: withStyles( buttonTheme( 'error' ) )( MuiButton ),
	success: withStyles( buttonTheme( 'success' ) )( MuiButton ),
	warning: withStyles( buttonTheme( 'warning' ) )( MuiButton ),
	info: withStyles( buttonTheme( 'info' ) )( MuiButton ),
	cta: withStyles( buttonTheme( 'cta' ) )( MuiButton ),
};

const Button = ( props ) => {
	const color = props.color,
	isStatus = 'error' === color || 'success' === color || 'warning' === color || 'info' === color || 'cta' === color,
		StatusButton = isStatus ? StatusButtons[ color ] : MuiButton,
		colorProp = isStatus ? 'primary' : color;
	return (
		<StatusButton  { ...props } color={ colorProp } >{ props.children }</StatusButton>
	);
};

export default Button;
