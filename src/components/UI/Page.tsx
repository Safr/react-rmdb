 import styled from 'styled-components';
 import { media } from 'lib/styles';

export const Content = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  ${media.phone`
   height: auto;
    padding: 20px 15px 30px 15px;
  `};
`;
