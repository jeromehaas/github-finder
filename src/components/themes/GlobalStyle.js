import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body{
		background: ${p => p.theme.bodyBackgroundColor};
		min-height: 100vh;
		margin: 0;
		color: ${p => p.theme.bodyFontColor};
    font-family: 'Roboto', sans-serif;
	}
`;

export default GlobalStyle;