import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.links}; 
  }
  header a {
    color: ${({ theme }) => theme.headings};
    text-decoration: none;
  }
  h1, h2, h3 {
    color: ${({ theme }) => theme.headings}; 
  }
  h2:after {
    background: ${({ theme }) => theme.accents};
  }
  .grid-item {
    background: ${({ theme }) => theme.grids}; 
  }
  .toggle {
    border: 3px solid ${({ theme }) => theme.accents};
    fill: ${({ theme }) => theme.accents};
  }
  `;
