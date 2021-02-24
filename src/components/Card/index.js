import React, { Component, Fragment } from "react";
import { Container, OtherTours } from "./styles";
import Balloons from "../../assets/Balloons.jpg";
import Mountains from "../../assets/Mountains.jpg";
import Coconut from "../../assets/Coconut.jpg";

class Card extends Component {
  state = {
    cards: [
      {
        card1: Balloons,
        text: "Balloon Flights",
      },

      {
        card1: Mountains,
        text: "Mountain Holiday",
      },

      {
        card1: Coconut,
        text: "Beach Holidays",
      },
    ],
  };
  render() {
    return (
      <>
        {this.state.cards.map((element, key) => (
          <Container>
            <img key={key} src={element.card1} />
            <div className="text">
              <h1>{element.text}</h1>
            </div>
          </Container>
        ))}
        {/* { <OtherTours>
          <a>Other Tours</a>
        </OtherTours>} */}
      </>
    );
  }
}

export default Card;
