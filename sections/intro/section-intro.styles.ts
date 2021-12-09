import styled from 'styled-components';
import { animated } from 'react-spring';

export const BasicPart = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`;

export const SectionHello = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  height: 100vh;
`;

export const SectionIntro = styled(animated.div)`
  position: fixed;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -ms-flex-align: center;
  background: #ff5851;
  width: 100%;
  height: 100vh;
`;

export const LeftPart = styled(BasicPart)`
  width: 50%;
  height: 100%;
  background: #ec6459;
`;

export const RightPart = styled(BasicPart)`
  width: 50%;
  height: 100%;
  background: #f8f8f8;
`;

export const IntroTitle = styled(animated.div)`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 54px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
  margin-bottom: 0px !important;
`;
