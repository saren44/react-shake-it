import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

	a {
		color: ${({ theme }) => theme.link};
		text-decoration: none;

		-webkit-user-select: none; 
  	-ms-user-select: none; 
  	user-select: none; 
	}
`;

export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
	link: '#121620',
	linkHover: '#121620'
};

export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
	link: '#f1f1f1',
	linkHover: '#f1f1f1'
};