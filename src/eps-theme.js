import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
	{
		direction: 'ltr',
		props: {
			MuiButtonBase: {
				disableRipple: true,
			},
			MuiButton: {
				disableElevation: true,
			},
		},
		shape: {
			borderRadius: 3,
		},
		typography: {
			button: {
				textTransform: 'Capitalize',
				fontWeight: 400,
			},
			h1: {
				fontSize: '1.625rem',
				fontWeight: 500,
			},
			h2: {
				fontSize: '1.25rem',
				fontWeight: 500,
			},
			h3: {
				fontSize: '1rem',
			},
			body1: {
				fontSize: '0.875rem',
			},
			body2: {
				fontSize: '0.75rem',
			},
		},
		palette: {
			common: {
				black: "#000",
				white: "#fff",
			},
			background: {
				paper: "rgba(241, 243, 245, 1)",
				default: '#f1f3f5',
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
				light: "rgba(146, 230, 255, 1)",
				main: "rgba(88, 208, 245, 1)",
				dark: "rgb(61,176,212)",
				contrastText: "#fff",
			},
			cta: {
				light: "#CA0059",
				main: "#93003f",
				dark: "#70002f",
				contrastText: "#fff",
			},
			text: {
				primary: "#495157",
				secondary: "#6d7882",
				disabled: "#c2cbd2",
				hint: "#a4afb7",
			},
			grey: {
				50: "#fdfdfd",
				100: "#fcfcfc",
				200: "#f1f3f5",
				300: "#d5dadf",
				400: "#c2cbd2",
				500: "#a4afb7",
				600: "#6d7882",
				700: "#556068",
				800: "#495157",
				900: "#3d4348",
				A100: "#d5d5d5",
				A200: "#aaaaaa",
				A400: "#303030",
				A700: "#616161",
			}
		},
		shadows: [
			"none",
			"0px 2px 1px -1px rgba(0,0,0,0.02),0px 1px 1px 0px rgba(0,0,0,0.014),0px 1px 3px 0px rgba(0,0,0,0.05)",
			"0px 3px 1px -2px rgba(0,0,0,0.02),0px 2px 2px 0px rgba(0,0,0,0.014),0px 1px 5px 0px rgba(0,0,0,0.05)",
			"0px 3px 3px -2px rgba(0,0,0,0.02),0px 3px 4px 0px rgba(0,0,0,0.014),0px 1px 8px 0px rgba(0,0,0,0.05)",
			"0px 2px 4px -1px rgba(0,0,0,0.02),0px 4px 5px 0px rgba(0,0,0,0.014),0px 1px 10px 0px rgba(0,0,0,0.05)",
			"0px 3px 5px -1px rgba(0,0,0,0.02),0px 5px 8px 0px rgba(0,0,0,0.014),0px 1px 14px 0px rgba(0,0,0,0.05)",
			"0px 3px 5px -1px rgba(0,0,0,0.02),0px 6px 10px 0px rgba(0,0,0,0.014),0px 1px 18px 0px rgba(0,0,0,0.05)",
			"0px 4px 5px -2px rgba(0,0,0,0.02),0px 7px 10px 1px rgba(0,0,0,0.014),0px 2px 16px 1px rgba(0,0,0,0.05)",
			"0px 5px 5px -3px rgba(0,0,0,0.02),0px 8px 10px 1px rgba(0,0,0,0.014),0px 3px 14px 2px rgba(0,0,0,0.05)",
			"0px 5px 6px -3px rgba(0,0,0,0.02),0px 9px 12px 1px rgba(0,0,0,0.014),0px 3px 16px 2px rgba(0,0,0,0.05)",
			"0px 6px 6px -3px rgba(0,0,0,0.02),0px 10px 14px 1px rgba(0,0,0,0.014),0px 4px 18px 3px rgba(0,0,0,0.05)",
			"0px 6px 7px -4px rgba(0,0,0,0.02),0px 11px 15px 1px rgba(0,0,0,0.014),0px 4px 20px 3px rgba(0,0,0,0.05)",
			"0px 7px 8px -4px rgba(0,0,0,0.02),0px 12px 17px 2px rgba(0,0,0,0.014),0px 5px 22px 4px rgba(0,0,0,0.05)",
			"0px 7px 8px -4px rgba(0,0,0,0.02),0px 13px 19px 2px rgba(0,0,0,0.014),0px 5px 24px 4px rgba(0,0,0,0.05)",
			"0px 7px 9px -4px rgba(0,0,0,0.02),0px 14px 21px 2px rgba(0,0,0,0.014),0px 5px 26px 4px rgba(0,0,0,0.05)",
			"0px 8px 9px -5px rgba(0,0,0,0.02),0px 15px 22px 2px rgba(0,0,0,0.014),0px 6px 28px 5px rgba(0,0,0,0.05)",
			"0px 8px 10px -5px rgba(0,0,0,0.02),0px 16px 24px 2px rgba(0,0,0,0.014),0px 6px 30px 5px rgba(0,0,0,0.05)",
			"0px 8px 11px -5px rgba(0,0,0,0.02),0px 17px 26px 2px rgba(0,0,0,0.014),0px 6px 32px 5px rgba(0,0,0,0.05)",
			"0px 9px 11px -5px rgba(0,0,0,0.02),0px 18px 28px 2px rgba(0,0,0,0.014),0px 7px 34px 6px rgba(0,0,0,0.05)",
			"0px 9px 12px -6px rgba(0,0,0,0.02),0px 19px 29px 2px rgba(0,0,0,0.014),0px 7px 36px 6px rgba(0,0,0,0.05)",
			"0px 10px 13px -6px rgba(0,0,0,0.02),0px 20px 31px 3px rgba(0,0,0,0.014),0px 8px 38px 7px rgba(0,0,0,0.05)",
			"0px 10px 13px -6px rgba(0,0,0,0.02),0px 21px 33px 3px rgba(0,0,0,0.014),0px 8px 40px 7px rgba(0,0,0,0.05)",
			"0px 10px 14px -6px rgba(0,0,0,0.02),0px 22px 35px 3px rgba(0,0,0,0.014),0px 8px 42px 7px rgba(0,0,0,0.05)",
			"0px 11px 14px -7px rgba(0,0,0,0.02),0px 23px 36px 3px rgba(0,0,0,0.014),0px 9px 44px 8px rgba(0,0,0,0.05)",
			"0px 11px 15px -7px rgba(0,0,0,0.02),0px 24px 38px 3px rgba(0,0,0,0.014),0px 9px 46px 8px rgba(0,0,0,0.05)",
		],
		overrides: {
			MuiCssBaseline: {
				'@global': {
					body: {
						WebkitFontSmoothing: 'antialiased',
						MozOsxFontSmoothing: 'grayscale',
					},
				},
			},
			MuiListItemIcon: {
				root: {
					minWidth: '1em',
					marginInlineEnd: '.75rem',
				},
			},
			MuiIcon: {
				fontSizeSmall: {
					fontSize: '1.125rem',
				}
			},
			MuiListItemText: {
				primary: {
					fontSize: '0.75rem',
					fontWeight: '500',
				}
			}
		}
	}
);

export default theme;
