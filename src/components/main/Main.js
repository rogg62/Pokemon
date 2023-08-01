import React from "react";
import { Container } from "react-bootstrap";
import MyCard from "../card/myCard";

const Main = () => {
  return (
    <main className="bg-white mt-5">
      <Container className="d-flex align-items justify-content-center flex-wrap gap-3">
        <MyCard />
      </Container>
    </main>
  );
};

export default Main;
