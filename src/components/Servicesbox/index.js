import React, { Component } from "react";
import { GoSettings } from "react-icons/go";
import {
  Container,
  BoxTitle,
  BoxText,
  BoxIcon,
  Boxes,
  OurTitle,
} from "./styles";

class Servicesbox extends Component {
  state = {
    box: [
      {
        icon: <GoSettings />,
        text1: "Personalized Matching",
        text2:
          "Our unique matching system lets you find just the tour you want for your next holiday",
      },
      {
        icon: <GoSettings />,
        text1: "Personalized Matching",
        text2:
          "Our unique matching system lets you find just the tour you want for your next holiday",
      },
      {
        icon: <GoSettings />,
        text1: "Personalized Matching",
        text2:
          "Our unique matching system lets you find just the tour you want for your next holiday",
      },
      {
        icon: <GoSettings />,
        text1: "Personalized Matching",
        text2:
          "Our unique matching system lets you find just the tour you want for your next holiday",
      },
      {
        icon: <GoSettings />,
        text1: "Personalized Matching",
        text2:
          "Our unique matching system lets you find just the tour you want for your next holiday",
      },
      {
        icon: <GoSettings />,
        text1: "Personalized Matching",
        text2:
          "Our unique matching system lets you find just the tour you want for your next holiday",
      },
    ],
  };

  render() {
    return (
      <Boxes>
        {this.state.box.map((element) => (
          <Container>
            <BoxIcon className="icon">{element.icon}</BoxIcon>
            <BoxTitle>{element.text1}</BoxTitle>
            <BoxText>{element.text2}</BoxText>
          </Container>
        ))}
      </Boxes>
    );
  }
}

export default Servicesbox;
