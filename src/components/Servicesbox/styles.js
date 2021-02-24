import styled from "styled-components";

export const Boxes = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-top: 3em;
`;

export const Container = styled.div`
  width: 33%;
  max-width: 370px;
  height: 240px;
  margin: 0px 24px 24px 0px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* flex-direction: row; */
  /* position: relative; */
  border: 8px solid #f4f4f4;
`;

export const BoxIcon = styled.div`
  font-size: 36px;
  line-height: 1;
  color: #01b3a7;
  /* margin-right: 8em; */
`;

export const BoxTitle = styled.strong`
  font-size: 21px;
  font-weight: 500;
  line-height: 1.2;
`;

export const BoxText = styled.small`
  width: 68%;
  font-size: 15px;
  color: #9b9b9b;
`;
