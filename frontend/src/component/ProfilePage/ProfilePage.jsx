// Importo gli hooks di react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Importo i componenti utilizzati
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Aside from "../Aside/Aside";
import ExperiencesContainer from "../Experiences/ExperiencesContainer";

// Importo gli stili di react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// ENDPOINT dei profili con Token per l'AUTH

export default function ProfilePage() {
  
  
  return (
    <>
      <Container className="mt-5 pt-2">
        <Row>
          <Col lg={9} md={8}>
            <ProfileDetails/>
            <ExperiencesContainer />
          </Col>
          <Col lg={3} md={4} className="d-none d-md-block">
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
}
