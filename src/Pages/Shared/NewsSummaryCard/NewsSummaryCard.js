import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsSummaryCard = ({ news }) => {
  const { _id, title, total_view, rating, author, details, image_url } = news;
  // console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            style={{ height: "60px" }}
            className="me-2"
            roundedCircle
            src={author?.img}
          ></Image>
          <div>
            <h6 className="mb-0">{author?.name}</h6>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-3"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
