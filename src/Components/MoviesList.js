import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import Data from "./Data";

const MoviesList = ({ Data }) => {
  return (
    <div className="movieCard">
      {Data.map((el, id) => (
        <Card key={id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={el.image} height="300px" width="300" />

          <Card.Body>
            <Card.Text className="card">{el.date}</Card.Text>
            <Card.Title className="cardTitle">{el.title}</Card.Title>
            <ListGroup className="list-group-flush">
              <StarRatingComponent value={el.rating} />
            </ListGroup>
            <Card.Text className="card-Text">{el.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MoviesList;
