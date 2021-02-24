import React, { Component } from "react";
import Bigzbeach from "../../assets/Bigzbeach.jpg";
import {
  Container,
  Descriptionbox,
  Options,
  Description,
  GetAndRead,
  AreaImg,
  SectionOptions,
} from "./styles";

class Discoverbox extends Component {
  state = {
    type: 1,
  };

  render() {
    const { type } = this.state;
    return (
      <Container type={type}>
        <AreaImg>
          <img src={Bigzbeach} />
        </AreaImg>
        <Descriptionbox>
          <strong>Discover New Horizons</strong>
          <Options merda={type}>
            <div onClick={() => this.setState({ type: 1 })}>
              <li>
                <button className="About">ABOUT US</button>
              </li>
            </div>
            <div onClick={() => this.setState({ type: 2 })}>
              <li>
                <button className="Why">WHY CHOOSE US</button>
              </li>
            </div>
            <div onClick={() => this.setState({ type: 3 })}>
              <li>
                <button className="Our">OUR MISSION</button>
              </li>
            </div>
          </Options>
          <SectionOptions>
            {this.state.type === 1 && (
              <div>
                <Description>
                  Wonder Tour is committed to bringing our clients the best in
                  value and quality travel arrangements. We are passionate about
                  travel and sharing the world's wonders with you.
                </Description>
              </div>
            )}

            {this.state.type === 2 && (
              <div>
                <Description>
                  We are proud to offer excellent quality and value for money in
                  our tours, which give you the chance to experience your chosen
                  destination in an authentic and exciting way
                </Description>
              </div>
            )}

            {this.state.type === 3 && (
              <div>
                <Description>
                  Our mission is to provide the ultimate travel planning
                  experience while becoming a one-stop shop for every travel
                  service available in the industry. Our mission is to provide the ultimate travel planning
                </Description>
              </div>
            )}
          </SectionOptions>
          <GetAndRead>
            <button>Get in Touch</button>
            <button>Read More</button>
          </GetAndRead>
        </Descriptionbox>
      </Container>
    );
  }
}

export default Discoverbox;
