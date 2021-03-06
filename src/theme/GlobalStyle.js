import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,300;1,600&display=swap');

*, *::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    font-family: Poppins-Regular;
} 
html {
    font-size: 62,5%;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  /* max-width: 1300px; */
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
`;

export default GlobalStyle;
