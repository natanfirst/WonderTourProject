import React, { Component } from "react";
import { Container, HeaderTop, Titles, Menu } from "./styles";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGooglePlusCircle,
  AiOutlineInstagram,
} from "react-icons/ai";


class Header extends Component {
  state = {
    titles: [
      {
        title: "Home",
      },
      {
        title: "About",
      },
      {
        title: "Typography",
      },
      {
        title: "Contact Us",
      }
    ],

  }

  render() {
    return (
      <Container>
        <HeaderTop>
          <Menu>
            {this.state.titles.map((element, key) => (
                <Titles key={key}>{element.title}</Titles>
            ))}
          </Menu>
          <div className="button-icons">
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiFillGooglePlusCircle />
            <AiOutlineInstagram />
          </div>
        </HeaderTop>
      </Container>
    );
  }
}

export default Header;
