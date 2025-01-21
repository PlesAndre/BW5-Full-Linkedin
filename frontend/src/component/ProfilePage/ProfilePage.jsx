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
const API_PROFILE_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUxZjRiZTcyNDZhZDAwMTVjNTE1NzYiLCJpYXQiOjE3MzM0MjQzMTgsImV4cCI6MTczNDYzMzkxOH0.FgQRbzIKWv_pm2t9v9nus4hRdQgxTsCFHLOOUN994Hs";

export default function ProfilePage() {

  // Prende l'id dal componente UsersPage
  const params = useParams();

  // lo state profileDetails prende il valore dalla get dei profili
  const [profileDetails, setProfileDetails] = useState([]);

  useEffect(() => {
    fetch(API_PROFILE_URL + params.id, {
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore del server");
        }
        return response.json();
      })
      .then((data) => {
        setProfileDetails(data);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }, [params]);

  
  return (
    <>
      <Container className="mt-5 pt-2">
        <Row>
          <Col lg={9} md={8}>
            <ProfileDetails data={profileDetails} />
            <ExperiencesContainer id={params.id} />
          </Col>
          <Col lg={3} md={4} className="d-none d-md-block">
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
}
