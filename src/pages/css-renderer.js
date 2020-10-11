import React from 'react';
import EPS from './../eps-theme'
import { ThemeProvider } from '@material-ui/core/styles';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Code from "./../utils/code";

function CSSRenderer( props ) {
const sheets = new ServerStyleSheets();
ReactDOMServer.renderToString( sheets.collect(
	<ThemeProvider theme={EPS}>{ props.children }</ThemeProvider>
) );
let cssString = sheets.toString();


const regex = /\..*?xxx/gm;
const componentName = props.id;
cssString = cssString.replace( regex, '.eps-' + componentName )
	.replaceAll( 'MuiButton', 'eps-button' )
	.replaceAll( 'MuiBadge', 'eps-badge' )
	.replaceAll( 'Mui', 'eps' )
	.replaceAll( 'Base', '-base' )
	.replaceAll( '-root', '' );

	return (
		<div className="App">
			<Code code={ cssString } language="css" />
		</div>
	)
}

export default CSSRenderer;
