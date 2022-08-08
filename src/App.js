import React from "react";
import Container from "./containers/Container";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {

  const element = <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" />
  return (
    <>
      <Container element={element} />
    </>
  );
}

export default App;
