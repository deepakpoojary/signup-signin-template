import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Success from "./Components/Success";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/success" element={<Success />} />

        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  {'' /* whatever you do giv ur 100% */}
overflow-y: scroll;
  &::-webkit-scrollbar { 
    display: none;
  }
`;
//removing the above scrollbar

export default App;
