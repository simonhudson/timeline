'use strict';

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';

// Log accessibility issues to console in non-production environments
if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
	pageProps.theme = Theme;
	return (
		<>
			<Head>
				<title>Timeline</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<main>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</>
	);
};

export default App;
