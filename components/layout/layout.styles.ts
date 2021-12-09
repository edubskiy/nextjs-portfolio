import styled, { createGlobalStyle } from 'styled-components';

export const Layout = styled.div`
  position: relative;
  background: #f8f8f8;
  overflow: hidden;
  -webkit-transition: -webkit-transform 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  -moz-transition: -moz-transform 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  transition: transform 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  pointer-events: all;
  min-height: 100vh;
`;

// export const FontStyles = createGlobalStyle`
//   @font-face {
//     font-family: 'Roboto Condensed';
//     src: url(${RobotoWoff2}) format('woff2'),
//         url(${RobotoWoff}) format('woff');
//   }
// `;
