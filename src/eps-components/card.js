import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardImage from "../assets/media/single-post.svg";
import Button from "./eps-button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fade} from "@material-ui/core/styles/colorManipulator";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: fade(theme.palette.common.white, 0.5),
		transition: '0.3s',

		'&:hover': {
			backgroundColor: theme.palette.common.white,
			'--overlayOpacity': '1',
		}
	},
	cardOverlay: {
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		opacity: 'var(--overlayOpacity, 0)',
		backgroundColor: 'rgba(0,0,0,0.3)',
		position: 'absolute',
		display: 'flex',
		color: theme.palette.common.white,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		transition: '0.3s',
		borderRadius: 0,

		'& > *+*': {
			marginTop: theme.spacing(2),
		},
	},
	cardContent: {
		padding: theme.spacing(1.25),
	},
	cardHeader: {
		padding: theme.spacing(1.25),
		borderBottom: '1px solid' + theme.palette.grey[ 200 ],
	},
	cardHeading: {
		fontSize: '13px',
		fontWeight: 500,
	},
	cardMedia: {
		position: 'relative',
		paddingBottom: '95.6%',
	},
	cardImage: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	},
}));

export default function Card() {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.card}>
			<div className={classes.cardHeader}>
				<Typography className={classes.cardHeading}>Card Title</Typography>
			</div>
			<div className={classes.cardContent}>
				<div className={classes.cardMedia}>
					<img className={classes.cardImage} src={ CardImage } alt="Single Post"/>
					<Paper className={classes.cardOverlay}>
						<LockIcon />
						<Button color="cta" variant="contained" size="small">Go Pro</Button>
					</Paper>
				</div>
			</div>
		</Paper>
	);
}
