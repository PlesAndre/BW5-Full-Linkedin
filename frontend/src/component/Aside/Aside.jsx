import React, { useState, useEffect } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

const Aside = () => {
  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Errore:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <aside className="mt-5 pt-2">
      <h6>Altri profili per te</h6>
      <Container
        className="m-2 mt-3"
        style={{ height: "650px", position: "relative" }}
      >
        <Row
          className="g-0"
          style={{
            height: "calc(100% - 65px)",
            paddingRight: "10px",
            overflowY: "auto",
          }}
        >
          {user.map((singleUser) => (
            <Col key={singleUser._id} sm={12} className="mb-1">
              <Card
                className="d-flex flex-row flex-wrap border-0"
                style={{ width: "100%" }}
              >
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Img
                    src={singleUser.image}
                    alt={`${singleUser.name} ${singleUser.surname}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    className="img-fluid rounded-circle"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body className="p-0">
                    <Card.Title style={{ fontSize: "13px" }}>
                      {singleUser.name} {singleUser.surname}
                    </Card.Title>
                    <Card.Text className="mb-1" style={{ fontSize: "12px" }}>
                      {singleUser.title || ""}
                    </Card.Text>
                    <Button variant="primary" size="sm">
                      Collegati
                    </Button>
                  </Card.Body>
                </Col>
              </Card>
              <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
            </Col>
          ))}
        </Row>
        <div
          className="d-flex justify-content-center"
          style={{
            position: "absolute",
            bottom: "10px",
            width: "100%",
            paddingBottom: "10px",
          }}
        >
          <Button
            variant="outline-primary"
            size="lg"
            style={{ fontSize: "15px" }}
          >
            Mostra tutto
          </Button>
        </div>
      </Container>
    </aside>
  );
};

export default Aside;
