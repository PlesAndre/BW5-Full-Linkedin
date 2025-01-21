import React from "react";

// Stili di react-bootstrap
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: 50,
        paddingBottom: 50,
        bottom: 0,
        textAlign: "center",
        width: "100%",
      }}
    >
      <Container className="text-center">{`${new Date().getFullYear()} - © Strive School | Developed for homework projects.`}</Container>
    </footer>
  );
}
