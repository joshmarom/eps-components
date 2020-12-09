import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Eicon from "./eicon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 'Clamp( 230px, 25%, 275px )';

const useStyles = makeStyles(( theme ) => ({
	drawer: {
		width: drawerWidth,
			flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
			borderRight: '0',
			backgroundColor: 'rgba(255, 255, 255, 0.5)',
	},
	drawerContainer: {
		overflow: 'auto',
	},
	listItem: {
		paddingRight: theme.spacing( 4 ),
			paddingLeft: theme.spacing( 4 ),
			minHeight: theme.spacing( 5.5 ),

			'&:hover': {
			backgroundColor: theme.palette.common.white,
				boxShadow: theme.shadows[ 2 ],

				'& .MuiIcon-root': {
				color: theme.palette.info.main,
			},
		},
	},
}));

export default function Sidebar( props ) {
	const classes = useStyles();

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			PaperProps={{
				variant: 'elevation',
				elevation: 10,
			}}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>
					{ props.menuItems.map( (item, index) => (
						<ListItem button className={classes.listItem} key={item.icon}>
							<ListItemIcon>
								<Eicon fontSize="small" icon={item.icon} />
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					) ) }
				</List>
			</div>
		</Drawer>
	);
}
