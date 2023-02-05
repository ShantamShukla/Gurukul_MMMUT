import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link} from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import { useToast } from '@chakra-ui/react';
  
  
  const Signup = () => {
    let navigate = useNavigate();
    const toast = useToast(); 
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Submit = () =>{ 
      if (!name || !email || !password) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    else{
      let path = `/form`; 
      navigate(path);}
  }
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading alignSelf={'center'}>GURUKUL</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'} onClick={Submit}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Login</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;