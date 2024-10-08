import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Header from "../components/Header";

const Home = () => {
  const [todos, setTodos] = useState();

  return (
    <>
      <Header />
      <Container className="p-5 my-5 bg-warning rounded-4">
        <Row className="my-5">
          <Col sm={12} lg={6} className="">
            <AddTodo setTodos={setTodos} />
          </Col>
          <Col sm={12} lg={6}>
            <TodoList todos={todos} setTodos={setTodos} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
