import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Login = () => {
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
            <Heading>Welcome Back</Heading>
  
            <Input
              placeholder={'Admin Email'}
              type={'Adminemail'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Log In
            </Button>
  
            
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Login;