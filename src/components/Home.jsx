import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

const Home = () => {
  return (
    <Box  >
         <MyCarousel />
         <Container maxW={'container.xl'}  minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Learn Skills
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'left'}
          direction={['column', 'row']}
        >
          <div className='Soft Skills'>

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'left'}
          >
            <Box w="full" h={'100vh'}>
            <Heading 
            py="1"
            w={'fit-content'}
            borderBottom={'1px solid'}
            m="auto"
          >
            Soft Skills.
            </Heading>
            <ul><li><a href ="http://localhost:3000/videos">Web Development</a></li>
            <li>App Development</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Cyber Security</li></ul>
            </Box>
            
          </Text>
          </div>
          <div className='Technical Skills'>
          
          
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'left'}
          >
            <Heading
            
            py="1"

            w={'fit-content'}
            borderBottom={'1px solid'}
            m="auto"
          >
            Technical Skills
            </Heading>
            <ul><li>Communication Skills</li>
            <li>Leadership</li>
            <li>Time Management</li>
            </ul>
            
          </Text>
          </div>
        </Stack>
        
      </Container>
      <Container maxW={'container.xl'}  minH={'50vh'} p="8">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          About Us
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Gurukul is a platform dedicated to empowering individuals by providing them with the resources and tools they need to develop their skills. Our mission is to make learning accessible, engaging, and impactful for everyone.

            With a focus on both soft and hard skills, we offer a wide range of video tutorials covering everything from leadership and communication to programming and data analysis. Our expert instructors have years of experience in their respective fields, and are dedicated to delivering engaging and informative lessons that can help you reach your goals.

            At Gurukul, we believe that learning is a lifelong journey, and we're here to provide you with the support and guidance you need to succeed. Whether you're looking to advance in your current career, start a new one, or simply pursue a personal passion, we're here to help.

            So why wait? Sign up today and start your journey to a better, more skilled you!
          </Text>
        </Stack>
      </Container>

    </Box>
    
  )
}
const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1500}
      showStatus={false}
      showThumbs={false}
      showArrows={true}
    >
      <Box w="full" h={'50vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Excellence is not a skill, it's an attitude.
        </Heading>
      </Box>
      <Box w="full" h={'50vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Learning how to learn is life's most important skill.
        </Heading>
      </Box>
  
      <Box w="full" h={'50vh'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Having a skill makes you undeniable.
        </Heading>
      </Box>
  
      <Box w="full" h={'50vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        'Tis skill, not strength, that governs a ship.
        </Heading>
      </Box>
    </Carousel>
  );
  

export default Home
