import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import CSSRenderer from './pages/css-renderer';
import EpsCard from './pages/card-demo';
import MuiEps from './pages/mui-eps';
import Button from './eps-components/eps-button'
import Badge from '@material-ui/core/Badge'

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

export default function App() {
/*
	function useQuery() {
		return new URLSearchParams( useLocation().search );
	}

	let query = useQuery();
	const direction = query.get('direction') ? query.get('direction') : 'ltr';*/

	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/css/button">Button CSS</Link>
					</li>
					<li>
						<Link to="/css/badge">Badge CSS</Link>
					</li>
					<li>
						<Link to="/css/custom">Custom CSS</Link>
					</li>
					<li>
						<Link to="/css/all">All CSS</Link>
					</li>
					<li>
						<Link to="/mui-eps">MUI EPS</Link>
					</li>
				</ul>

				<hr/>

				<Switch>
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
			</div>
		</Router>
	);
}
