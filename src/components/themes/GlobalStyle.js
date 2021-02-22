import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
		background: ${p => p.theme.secondary};
		min-height: 100vh;
		margin: 0;
		color: ${p => p.theme.tertiary};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    transition: all 0.25s ease;
	}

  .button {
    width: 100;
    text-align: center;
    display: inline-block;
    background-color: red;
  }
`;

export default GlobalStyle;