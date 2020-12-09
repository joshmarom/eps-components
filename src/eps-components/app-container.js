import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Eicon from "./eicon";
import Typography from "@material-ui/core/Typography";
import Sidebar from "./app-sidebar";
import menuItems from "../pages/menu-items";
import Grid from "@material-ui/core/Grid";
import Button from "./eps-button";
import Divider from "@material-ui/core/Divider";
import Card from "./card";
import React from "react";

export default function AppContainer( props ) {
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
