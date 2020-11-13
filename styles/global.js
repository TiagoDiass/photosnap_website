import { createGlobalStyle } from 'styled-components';

// Minimal CSS reset
const globalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #ccc;
  }

  *, *::after, *::before{
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img:not([alt]){
    border: 5px solid red;
  }

  ul, li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default globalStyle;
