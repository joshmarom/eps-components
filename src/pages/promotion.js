import React from 'react';
import Button from './../eps-components/eps-button';
import Eicon from './../eps-components/eicon';
import Card from './../eps-components/card';
import menuItems from './menu-items'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './../eps-components/app-sidebar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: theme.palette.common.white,
		color: theme.palette.text.primary,
		textTransform: 'uppercase',

		'& h3': {
			color: theme.palette.text.primary,
			fontWeight: '700',
		},
	},
	logo: {
		display: 'inline-block',
		backgroundColor: theme.palette.cta.main,
		textAlign: 'center',
		color: theme.palette.common.white,
		borderRadius: '100%',
		fontSize: '0.75rem',
		width: '1.75rem',
		height: '1.75rem',
		lineHeight: '1.75rem',
		marginRight: theme.spacing(1),
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing( 6 ),
		color: theme.palette.text.secondary,
	},
	grid: {
		marginTop: theme.spacing( 5.5 ),
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(12.5rem, 1fr))',
		gridGap: theme.spacing( 4 ),
	},
}));

export default function ClippedDrawer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar variant="dense">
					<Eicon fontSize="small" icon="elementor" className={classes.logo} />
					<Typography variant="h3" noWrap>
						Theme Builder
					</Typography>
				</Toolbar>
			</AppBar>
			<Sidebar menuItems={menuItems} />
			<main className={classes.content}>
				<Toolbar />
				<Grid container>
					<Grid item md={9}>
						<Typography variant="h1" component="h1" gutterBottom>
							Convallis convallis tellus id interdum
						</Typography>
						<Typography paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
							facilisis leo vel. Risus at ultrices mi tempus imperdiet.
						</Typography>
					</Grid>
					<Grid item container alignItems="flex-start" justify="flex-end" md={3}>
						<Button variant="contained" size="small" color="cta">Go Pro</Button>
					</Grid>
				</Grid>
				<Divider />
				<section className={classes.grid}>
					<Card /><Card /><Card /><Card />
					<Card /><Card /><Card /><Card />
					<Card /><Card /><Card /><Card /><Card />
				</section>
			</main>
		</div>
	);
}
