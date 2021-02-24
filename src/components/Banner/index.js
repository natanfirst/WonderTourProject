import React, { Component } from "react";
import { Container, PraiaImg, DescriptionBanner } from "./styles";
import Beach from "../../assets/Beach.jpg";

class Banner extends Component {
  render() {
    return (
      <Container>
        <PraiaImg>
          <img src={Beach} />
        </PraiaImg>
        <DescriptionBanner>
          <small>build your next holiday with us</small>
          <strong>Create Your Tour</strong>
          <button>Get in Touch</button>
        </DescriptionBanner>
      </Container>
    );
  }
}

export default Banner;
