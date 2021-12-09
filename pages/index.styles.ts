import styled from 'styled-components';

export const App = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  -webkit-transform-origin: center 50vh;
  -moz-transform-origin: center 50vh;
  -ms-transform-origin: center 50vh;
  -o-transform-origin: center 50vh;
  transform-origin: center 50vh;
  -webkit-transition: -webkit-transform 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  -moz-transition: -moz-transform 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  transition: transform 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  pointer-events: none;
  min-height: 100vh;
`;
