import * as React from 'react';
import styled from 'styled-components';

const Spinner = () => <Loader />;

export default Spinner;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;

  border-radius: 50%;
  border-top: solid 6px #f56151;
  border-right: solid 6px transparent;
  border-bottom: solid 6px transparent;
  border-left: solid 6px transparent;
  /* animation: cp-skeleton-animate 1s linear infinite; */

  ::before {
    border-radius: 50%;
    content: ' ';
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px transparent;
    border-bottom: solid 6px transparent;
    border-left: solid 6px #f56151;
    position: absolute;
    top: -6px;
    left: -6px;
    transform: rotateZ(-30deg);
  }

  ::after {
    border-radius: 50%;
    content: ' ';
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px #f56151;
    border-bottom: solid 6px transparent;
    border-left: solid 6px transparent;
    position: absolute;
    top: -6px;
    right: -6px;
    transform: rotateZ(30deg);
  }
`;

// keyframes cp-skeleton-animate {
//   0% {
//     transform: rotate(0);
//     opacity: 1;
//   }
//   50%{
//     opacity: .7;
//   }
//   100% {
//     transform: rotate(360deg);
//     opacity: 1;
//   }
// }
