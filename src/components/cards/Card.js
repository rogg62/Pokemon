import React from "react";
import CardImg from "./cardImagem/CardImg";
import Card from "react-bootstrap/Card";

import "./style.css";
const Cards = ({ name }) => {
  return (
    <>
      {name &&
        name.results.map((i) => (
          <Card
            className="d-flex align-items-center justify-content-center gap-0 position-relative rounded"
            style={{ width: "177px", height: "115.178px" }}
            key={i.name}
          >
            <CardImg pokemon={i.name} />
            <Card.Body className=" m-0 d-flex flex-column align-items-center justify-content-end">
              <Card.Title className="m-0">{i.name}</Card.Title>
              <Card.Text className="d-flex justify-content-around"></Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Cards;
