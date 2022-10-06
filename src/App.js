import React from "react";
import Container from "./containers/Container";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


function App() {

  const element = <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" />
  const twitter = <FontAwesomeIcon icon={faTwitter} size="2xl" />

  return (
    <>
      <Container element={element} twitter={twitter} />
    </>
  );
}

export default App;
