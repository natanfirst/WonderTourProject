import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 12rem;
  display: flex;
  img {
    width: 556px;
    height: 382px;
  }
`;
export const AreaImg = styled.div`
  width: 50%;
`;

export const Descriptionbox = styled.div`
  width: 50%;
  position: relative;
  font-size: 21px;
  padding: 40px 40px 0px 40px;

  strong {
    font-size: 36px;
    font-weight: 600;
  }
`;

export const Options = styled.ul`
  width: 100%;
  display: flex;
  border-bottom: 3px solid #e1e1e1;
  padding-top: 20px;
  list-style: none;

  .About {
    color: ${(props) => (props.type === 1 ? "#01b3a7" : "rgb(155,155,155)")};

    :after {
      width: ${(props) => (props.type === 1 ? "100%" : "0")};
    }
  }

  .Why {
    color: ${(props) => (props.type === 2 ? "#01b3a7" : "rgb(155,155,155)")};

    :after {
      width: ${(props) => (props.type === 2 ? "100%" : "0")};
    }
  }

  .Our {
    color: ${(props) => (props.type === 3 ? "#01b3a7" : "rgb(155,155,155)")};

    :after {
      width: ${(props) => (props.type === 3 ? "100%" : "0")};
    }
  }
  div {
    width: 33.3%;
    li {
      width: 100%;
      button {
        width: 100%;
        border: none;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1.6px;
        padding-bottom: 10px;
        background: #ffffff;
        display: flex;
        position: relative;
        cursor: pointer;

        :after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          height: 3px;
          background: #01b3a7;
          transition: 0.22s ease;
        }
      }
    }
    :last-child {
      button {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
export const Description = styled.p`
  font-size: 14px;
  margin: 20px 0px;
  line-height: 25px;
`;

export const GetAndRead = styled.div`
  padding-top: 20px;
  display: flex;

  button {
    width: 30%;
    height: 60px;
    min-width: 180px;
    font-size: 16px;
    color: #ffffff;
    margin-right: 20px;
    border: 2px solid #01b3a7;
    background-color: #01b3a7;
    transition: all ease-in 0.2s;
    cursor: pointer;
    :hover {
      color: #000;
      background-color: transparent;
      border: 2px solid #000;
    }

    :last-child {
      color: #000;
      border: 2px solid #000;
      background-color: transparent;

      :hover {
        background-color: #01b3a7;
        border: 2px solid #01b3a7;
      }
    }
  }
`;
export const SectionOptions = styled.div``;
