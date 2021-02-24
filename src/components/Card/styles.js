import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative; 

  img {
    max-width: 100%;
    height: 420px;
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3;
    :hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .text {
    position: absolute;
    z-index: 1;
    h1 {
      color: #ffffff;
      font-size: 18px;
    }
  }
`;
// export const OtherTours = styled.div`
//   a {
//     font-size: 16px;
//    text-transform: none;
//     color: #151515;
//   }
//  `;
