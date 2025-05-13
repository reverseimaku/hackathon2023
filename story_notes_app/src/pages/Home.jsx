import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Image,
    Heading,
    Box,
    Button,
    Text
  } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack, SimpleGrid} from '@chakra-ui/react'
import tasmania from '../assets/images/tasmania.jpg'
import { faTrash, faCamera, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lila from '../assets/images/lila.png'

const Home = () => {
  return (
    <>
    <Box>
      <Image src={tasmania} w="100%" h="300px" objectFit="cover" position="absolute" opacity="50%" zIndex="-1"/>
    <Box p="15px"><FontAwesomeIcon icon={faCamera} size="lg" opacity="50%"/></Box>
        <Box textAlign="center" paddingTop="50  px"><Text fontSize="60px" fontWeight="bold" p="absolute" zIndex="2">Fantasy Tassie</Text>
        <FontAwesomeIcon icon={faEdit} size="lg" opacity="50%"/></Box>
        <Box marginTop="200px">
        <SimpleGrid p="10px" columns={4} spacing={4} minChildWidth={400} marginLeft="50px">
        

        <NavLink to={`/characters`} ><Card w="300px" h="200px" bg="red.200">
        {/* <Image src={lila}/> */}<Text textAlign="center" pt="90px" fontWeight="bold" fontSize="30px">Characters</Text>
        </Card></NavLink>

        <NavLink to={`/characters`} >
        <Card w="300px" h="200px" bg="red.200">
        <Text textAlign="center" pt="90px" fontWeight="bold" fontSize="30px">Setting</Text>
        </Card></NavLink>

        <NavLink to={`/characters`} >
        <Card w="300px" h="200px" bg="red.200">
        {/* <Image src={lila}/> */}<Text textAlign="center" pt="90px" fontWeight="bold" fontSize="30px" opacity="50%"><FontAwesomeIcon icon={faPlus}/> Add New Card</Text>
        </Card></NavLink>


        </SimpleGrid>
        </Box>

        </Box>
    </>
  )
}

export default Home
