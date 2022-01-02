import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const MainContainer = styled.div`
  background: linear-gradient(to bottom right, #9CC1D9, #F2D680)
`

export const MyBtn = styled.button`
  background: #9CC1D9;
  color: white;
  font-size: 12px;
`

export const Header = styled.h1`
  color: #9CC1D9;
  text-align: center !important;
  font-size: ${props => props.lrg ? '40px': '20px'} !important;
`

export const GoldBtn = styled(Button)`
  background: #F2D680 !important;

  &:hover {
    background-color: lightblue !important;
  }

  @media only screen and (min-width: 728px) {
    background: red !important;
  }
`