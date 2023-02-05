import { Box, Container } from '@chakra-ui/react';
import React, { useState } from "react";

const Header = () => (
    <Box>
        <Container>
  <header style={{ backgroundColor: "#800080", display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
    <h1 style={{ color: "white" }}>Skill Assessment Form</h1>
  </header>
  </Container>
  </Box>
);
const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };
const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    strengths: "",
    weaknesses: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Strengths: ", formData.strengths);
    console.log("Weaknesses: ", formData.weaknesses);
  };

  return (
    <Box>
        <Container>
    <div style={{ padding: "50px" }}>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Strengths:
            <input
              type="text"
              name="strengths"
              value={formData.strengths}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Weaknesses:
            <input
              type="text"
              name="weaknesses"
              value={formData.weaknesses}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </Container>
    </Box>
  );
};

export default AssessmentForm;