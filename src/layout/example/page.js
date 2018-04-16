import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({ _ID, _relativeURL, pagetitle, example, alignment, fullwidth }) => {

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<link rel="apple-touch-icon" sizes="180x180" href=${ _relativeURL('/assets/favicons/apple-touch-icon.png', _ID ) }>
<link rel="icon" type="image/png" sizes="32x32" href=${ _relativeURL('/assets/favicons/favicon-32x32.png', _ID ) }>
<link rel="icon" type="image/png" sizes="16x16" href=${ _relativeURL('/assets/favicons/favicon-16x16.png', _ID ) }>
<link rel="manifest" href=${ _relativeURL('/assets/favicons/site.webmanifest', _ID ) }>
<link rel="mask-icon" href=${ _relativeURL('/assets/favicons/safari-pinned-tab.svg', _ID ) } color="#06262d">
<link rel="shortcut icon" href=${ _relativeURL('/assets/favicons/favicon.ico', _ID ) }>
<meta name="msapplication-config" content=${ _relativeURL('/assets/favicons/browserconfig.xml', _ID ) }>
<meta name="msapplication-TileColor" content="#000000">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="GOLD team">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="GOLD">
<meta name="twitter:description" content="Government Open Language for Design - design system">
<meta name="twitter:name" content="GOLD">
<meta name="twitter:image" content="https://gold.service.gov.au/assets/favicons/gold.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="GOLD">
<meta property="og:site_name" content="GOLD">
<meta property="og:description" content="Government Open Language for Design - design system">
<meta property="og:image" content="https://gold.service.gov.au/assets/favicons/gold.jpg">
<meta property="og:url" content="https://gold.service.gov.au">

<title>${ pagetitle } - Australian Government Open Language for Design</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/example.css', _ID ) } />

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->

<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />
		<body className="au-body">

			<div className="example__wrapper">
				<h2 className='example__title'>Example</h2>
				<main className={ `example${ alignment === 'center' ? ' example--center' : '' }${ fullwidth === true ? ' example--fullwidth' : '' }` }>
					<div className='content'>
						{ example }
					</div>
				</main>
			</div>

			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
		</body>
		</html>
	)
};

Example.propTypes = {
};

Example.defaultProps = {
	alignment: 'left',
	fullwidth: false
};

export default Example;
