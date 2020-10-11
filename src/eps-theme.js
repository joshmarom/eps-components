import { createMuiTheme } from '@material-ui/core/styles';
import {fade} from "@material-ui/core/styles/colorManipulator";

const theme = createMuiTheme(
	{
		direction: 'rtl',
		props: {
			MuiButtonBase: {
				disableRipple: true,
			},
			MuiButton: {
				disableElevation: true,
			}
		},
		shape: {
			borderRadius: 3,
		},
		typography: {
			button: {
				textTransform: 'Capitalize',
				fontWeight: 400,
			}
		},
		palette: {
			common: {
				black: "#000",
				white: "#fff",
			},
			background: {
				paper: "rgba(241, 243, 245, 1)",
				default: "#fafaf",
			},
			primary: {
				light: "rgba(109, 120, 130, 1)",
				main: "rgba(85, 96, 104, 1)",
				dark: "rgba(73, 81, 87, 1)",
				contrastText: "#fff",
			},
			secondary: {
				light: "rgba(213, 218, 223, 1)",
				main: "rgba(194, 203, 210, 1)",
				dark: "rgba(164, 175, 183, 1)",
				contrastText: "rgba(73, 81, 87, 1)",
			},
			error: {
				light: "rgba(221, 52, 52, 1)",
				main: "rgba(176, 27, 27, 1)",
				dark: "rgba(138, 24, 24, 1)",
				contrastText: "#fff",
			},
			success: {
				light: "rgba(92, 231, 112, 1)",
				main: "rgba(57, 181, 74, 1)",
				dark: "rgb(40,155,54)",
				contrastText: "#fff",
			},
			warning: {
				light: "rgba(255, 213, 129, 1)",
				main: "rgba(252, 185, 44, 1)",
				dark: "rgb(219,160,39)",
				contrastText: "#fff",
			},
			info: {
				light: "rgb(146, 230, 255, 1)",
				main: "rgba(88, 208, 245, 1)",
				dark: "rgb(61,176,212)",
				contrastText: "#fff",
			},
			text: {
				primary: "rgba(0, 0, 0, 0.87)",
				secondary: "rgba(0, 0, 0, 0.54)",
				disabled: "rgba(0, 0, 0, 0.38)",
				hint: "rgba(0, 0, 0, 0.38)",
			},
		}
	}
);

export default theme;
