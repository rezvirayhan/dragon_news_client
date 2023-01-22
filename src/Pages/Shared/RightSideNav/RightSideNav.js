import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <h2>Right Side Nav</h2>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Logn with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> YouTube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaDiscord></FaDiscord> Discord
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
