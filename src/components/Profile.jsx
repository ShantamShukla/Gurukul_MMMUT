import React from 'react'
import { Avatar, Text, Flex } from '@chakra-ui/react'
import { Box, FormControl, FormLabel, Select, Input, Button, Container } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
      <Box backgroundColor="purple" textAlign="center" padding="30px 0" fontSize="32px">
        <h1 style={{ color: "white" }}>Profile</h1>
      </Box>
    );
  };

const UserProfile = ({ name, avatarUrl }) => {
  return (
        <><div>
          <Header />
      </div><Flex align='center'>
              <Avatar size='lg' src={avatarUrl} />
              <Box ml={3}>
                  <Text fontWeight='bold'>{name}</Text>
              </Box>
          </Flex></>
  )
}

export default UserProfile
