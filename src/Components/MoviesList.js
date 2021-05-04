import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const MoviesList = ({ movies }) => {
  console.log({ movies });
  return (
    <div className="movieCard">
      {movies.map((el, i) => (
        <Card key={i} style={{ width: "18rem" }}>
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
