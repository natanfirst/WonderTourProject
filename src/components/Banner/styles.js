import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PraiaImg = styled.div`
  img {
    width: 100%;
    height: 454px;
    object-fit: cover;
  }
`;

export const DescriptionBanner = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0px 42px;
  display: flex;
  position: absolute;
  flex-direction: column;

  small {
    font-size: 16px;
    color: #ffffff;
    font-family: sans-serif;
    text-transform: uppercase;
  }

  strong {
    color: #ffffff;
    margin: 0px;
    font-size: 64px;
    text-transform: capitalize;
  }

  button {
    max-width: 150px;
    font-size: 15px;
    z-index: 0;
    color: #ffffff;
    background-color: transparent;
    border-color: #ffffff;
    width: 30%;
    height: 50px;
    border: 2px solid #ffffff;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in;
    :hover {
      background-color: #01b3a7;
      border-color: #01b3a7;
      color: #ffffff;
    }
  }
`;
