import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import CSSRenderer from './pages/css-renderer';
import EpsCard from './pages/card-demo';
import MuiEps from './pages/mui-eps';
import Promotion from './pages/promotion';
import Button from './eps-components/eps-button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import EPS from './eps-theme'

const AllCss = () => {
		const components = [
			{
				id: 'badge',
				component: <Badge />,
			},
			{
				id: 'button',
				component: <Button />,
			},
			{
				id: 'card',
				component: <EpsCard />,
			}
		];

		return (
			components.map( ( component) =>
				<CSSRenderer key={ component.id } id={ component.id }>
					{ component.component }
				</CSSRenderer>
			)
		);
	};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

const ListItemLink = ( props ) => {
	return <ListItem button component="a" {...props} />;
};

export default function App() {
	const [ anchorEl, setAnchorEl ] = React.useState( null );
	const routerClickHandler = ( event ) => {
		setAnchorEl( event.currentTarget );
	},
		routerCloseHandler = () => {
		setAnchorEl(null);
	},
		open = Boolean(anchorEl),
		id = open ? 'simple-popover' : undefined;

	const classes = useStyles();

	return (
		<ThemeProvider theme={EPS}>
			<Router>
				<Fab  className={ classes.fab } aria-describedby={id} color="primary" aria-label="open menu" onClick={ routerClickHandler }>
					<UpIcon />
				</Fab>
				<Popover
					id={ id }
					open={ open }
					anchorEl={ anchorEl }
					onClose={ routerCloseHandler }
					anchorOrigin={{
						vertical: -10,
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
				>
					<div className={ classes.root }>
						<List component="nav" aria-label="main mailbox folders">
							<ListItemLink href="/">
								<ListItemText primary="Promotion" />
							</ListItemLink>
							<Divider />
							<ListItemLink href="/css/button">
								<ListItemText primary="Button CSS" />
							</ListItemLink>
							<ListItemLink href="/css/badge">
								<ListItemText primary="Badge CSS" />
							</ListItemLink>
							<ListItemLink href="/css/custom">
								<ListItemText primary="Custom CSS" />
							</ListItemLink>
							<ListItemLink href="/css/all">
								<ListItemText primary="All CSS" />
							</ListItemLink>
							<ListItemLink href="/mui-eps">
								<ListItemText primary="MUI EPS" />
							</ListItemLink>
						</List>
					</div>
				</Popover>

				<Switch>
					<Route path="/">
						<Promotion />
					</Route>
					<Route path="/css/button">
						<CSSRenderer key="button" id="button"><Button /></CSSRenderer>
					</Route>
					<Route path="/css/badge">
						<CSSRenderer key="badge" id="badge"><Badge /></CSSRenderer>
					</Route>
					<Route path="/css/custom">
						<CSSRenderer key="card" id="card"><EpsCard /></CSSRenderer>
					</Route>
					<Route path="/css/all">
						<AllCss/>
					</Route>
					<Route path="/mui-eps">
						<MuiEps/>
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
