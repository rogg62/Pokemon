import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
const Cards = ({ name, img, indice }) => {
  return (
    <>
      <Card
        className="d-flex align-items-center justify-content-center gap-0 position-relative"
        style={{ width: "177px", height: "115.178px" }}
      >
        <img src={img} id="img" alt="" />

        <div id="id">{indice}</div>
        <Card.Body className=" m-0 d-flex flex-column align-items-center justify-content-end">
          <Card.Title
            id="title"
            className="m-0 d-flex flex-row-reverse align-items-center justify-content-center gap-3"
          >
            {name}
          </Card.Title>
          <Card.Text className="d-flex justify-content-around"></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
