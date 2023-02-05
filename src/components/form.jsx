import React, { useState } from "react";
import { Box, FormControl, FormLabel, Select, Input, Button, Container } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
      <Box backgroundColor="purple" textAlign="center" padding="30px 0" fontSize="32px">
        <h1 style={{ color: "white" }}>Skill Assessment Form</h1>
      </Box>
    );
  };

const Questionnaire = () => {

  const [answers, setAnswers] = useState({
    communication: 0,
    writing: 0,
    technical: 0,
    presentation: 0,
    timeManagement: 0,
    hobbies: "",
    motivation: "",
    careerGoals: "",
    challenges: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/assessmentresult");
    // Submit answers to API or process data further
  };

  return (
    <Box>
        <Container maxW={'container.xl'}  minH={'100vh'} p="16">
    <form onSubmit={handleSubmit} style={{padding:"3rem"}}> 
      <Heading as="h1"><strong>Communication Skills</strong></Heading>
      <FormControl>
        <FormLabel htmlFor="communication">Confidence in public speaking:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">Listening and understanding others' perspectives:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How well do you listen and understand others' perspectives:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How well do you articulate your thoughts and ideas to others:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      
      <Heading as="h1"><strong>Writing Skills</strong></Heading>
      <FormControl>
        <FormLabel htmlFor="communication">How confident do you feel in writing reports, emails, or other professional documents:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How well do you structure your writing and use appropriate grammar and style:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How comfortable are you expressing your ideas in writing:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How effectively do you communicate through writing:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />

      <Heading as="h1"><strong>Technical Skills</strong></Heading>
      <FormControl>
        <FormLabel htmlFor="communication">How knowledgeable do you feel about the latest technologies and tools in your field of study:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How proficient are you with using various software or programming languages:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How well do you troubleshoot technical problems and find solutions:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How comfortable are you with learning and adapting to new technologies and tools:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />

      <Heading as="h1"><strong>Presentation Skills</strong></Heading>
      <FormControl>
        <FormLabel htmlFor="communication">How confident do you feel in delivering presentations or public speeches:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How effectively do you engage and connect with your audience:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How well do you use visual aids and other resources to support your presentations:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How confident do you feel in answering questions and addressing concerns from your audience:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />

      <Heading as="h1"><strong>Time Management and Organizational Skills</strong></Heading>
      <FormControl>
        <FormLabel htmlFor="communication">How effectively do you prioritize and manage your tasks and responsibilities:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How well do you meet deadlines and follow through on commitments:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How organized do you feel in managing your time, tasks, and resources:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel htmlFor="communication">How effectively do you balance and manage multiple responsibilities and projects:</FormLabel>
        <Select id="communication" name="communication" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormControl>
      <br />
      
      

      
      
      {/* Add similar FormControls for writing, technical, and presentation skills */}
      <h3>Personal Information</h3>
      <FormControl>
        <FormLabel htmlFor="hobbies">Hobbies and interests:</FormLabel>
        <Input id="hobbies" type="text" name="hobbies" onChange={handleChange} />
      </FormControl>
      <br />
      
      <Button type="submit">Submit</Button>
    </form>
    </Container>
    </Box>
  );


};

const App = () => {
  return (
    <div>
      <Header />
      <Questionnaire />
    </div>  
  );
};

export default App;