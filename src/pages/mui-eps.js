import React from 'react';
import Button from './../eps-components/eps-button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const typographyStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: 500,
	},
});

const buttonsStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

export default function Demo() {
	const typographyClasses = typographyStyles(),
		buttonsClasses = buttonsStyles();

	return (
		<div>
			<div className={buttonsClasses.root}>
				<Button variant="contained">Default</Button>
				<Button variant="contained" color="primary">Primary</Button>
				<Button variant="contained" color="secondary">Secondary</Button>
				<Button variant="contained" disabled>Disabled</Button>
				<Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
			</div>
			<div className={buttonsClasses.root}>
				<Button variant="contained" color="success">Success</Button>
				<Button variant="contained" color="error">Error</Button>
				<Button variant="contained" color="warning">Warning</Button>
				<Button variant="contained" color="info">Info</Button>
				<Button variant="contained" color="cta">Buy Now</Button>
			</div>
			<div className={buttonsClasses.root}>
				<Button variant="outlined" color="success">Success</Button>
				<Button variant="outlined" color="error">Error</Button>
				<Button variant="outlined" color="warning">Warning</Button>
				<Button variant="outlined" color="info">Info</Button>
				<Button variant="outlined" color="cta">Buy Now</Button>
			</div>
			<div className={buttonsClasses.root}>
				<Button color="success">Success</Button>
				<Button color="error">Error</Button>
				<Button color="warning">Warning</Button>
				<Button color="info">Info</Button>
				<Button color="cta">Buy Now</Button>
			</div>
			<div className={buttonsClasses.root}>
				<Button size="small">Small</Button>
				<Button size="medium">Medium</Button>
				<Button size="large">Large</Button>
			</div>
			<div className={buttonsClasses.root}>
				<Button variant="outlined" size="small" color="primary">Small</Button>
				<Button variant="outlined" size="medium" color="primary">Medium</Button>
				<Button variant="outlined" size="large" color="primary">Large</Button>
			</div>
			<div className={buttonsClasses.root}>
				<Button variant="contained" size="small" color="primary">Small</Button>
				<Button variant="contained" size="medium" color="primary">Medium</Button>
				<Button variant="contained" size="large" color="primary">Large</Button>
			</div>
			<div className={typographyClasses.root}>
				<Typography variant="h1" component="h2" gutterBottom>
					h1. Heading
				</Typography>
				<Typography variant="h2" gutterBottom>
					h2. Heading
				</Typography>
				<Typography variant="h3" gutterBottom>
					h3. Heading
				</Typography>
				<Typography variant="h4" gutterBottom>
					h4. Heading
				</Typography>
				<Typography variant="h5" gutterBottom>
					h5. Heading
				</Typography>
				<Typography variant="h6" gutterBottom>
					h6. Heading
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
				</Typography>
				<Typography variant="body1" gutterBottom>
					body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
					unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
					dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="body2" gutterBottom>
					body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
					unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
					dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="button" display="block" gutterBottom>
					button text
				</Typography>
				<Typography variant="caption" display="block" gutterBottom>
					caption text
				</Typography>
				<Typography variant="overline" display="block" gutterBottom>
					overline text
				</Typography>
			</div>
		</div>
	);
}

