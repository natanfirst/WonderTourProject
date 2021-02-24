import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:none;
}
body{
    width: 100%;
    background: #ffffff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased!important;
    font-family: "Montserrat";
}


h3{
    font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-top: 3em;
}
`;

export default GlobalStyle;
