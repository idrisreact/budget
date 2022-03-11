import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    /* background-color: #E4E6EB; */
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

`;
