// Importo gli hooks di react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Importo i componenti utilizzati
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Aside from "../Aside/Aside";
import ExperiencesContainer from "../Experiences/ExperiencesContainer";

// Importo gli stili di react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// ENDPOINT dei profili
const API_PROFILE_URL = `http://localhost:3001/api/users/`;

export default function ProfilePage() {
  // Prende l'id dal componente UsersPage
  const params = useParams();

  // lo state profileDetails prende il valore dalla get dei profili
  const [profileDetails, setProfileDetails] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(API_PROFILE_URL + params.id, {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore del server");
        }
        return response.json();
      })
      .then((data) => {
        setProfileDetails(data);
        setReload(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }, [params, reload]);

  return (
    <>
      <Container className="mt-5 pt-2">
        <Row>
          <Col lg={9} md={8}>
            <ProfileDetails
              data={profileDetails}
              apiUrl={API_PROFILE_URL}
              setReload={setReload}
            />
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
