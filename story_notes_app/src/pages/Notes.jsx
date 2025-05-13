import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Box, Text, Image, Flex, List, ListItem, Spacer} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import quinn from '../assets/images/quinn.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight, faEdit, faPlus, faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Notes = () => {
    const heading = {
        p: "30px",
        fontSize: "30px",
        fontWeight: "bold",
        color: "black",
        m: "20px",
        textAlign: "center"
    }
  return (
    <>
    <NavLink to={`/characters`}>
    <Box p="20px">
    <Flex>
    <FontAwesomeIcon icon={faStepBackward} size="lg" fontSize="30px"/>
    <Text fontWeight="bold" ml="15px">Back</Text>
    </Flex>
    </Box>
    </NavLink>

    <Box ml="500px" marginY="20px">
    <Flex>
    <Image src={quinn} w="200px" />
    <Text pl="50px" fontWeight="bold" fontSize="50px">Quinn</Text>
    </Flex>
    </Box>

{/* RoadTrip Arc */}
      <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
      <AccordionButton bg="red.200">
        <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="bold">
          Roadtrip Arc
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <List spacing={3}>
      <ListItem>
        <Flex>
      Tries to find her own identity with her half elf self
      <Spacer/>
      <FontAwesomeIcon icon={faPlus} size="lg" pl="20px"/>
      <FontAwesomeIcon icon={faTrash} size="lg"/>
      <FontAwesomeIcon icon={faEdit} size="lg"/>
        </Flex>

        <Flex>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/> Struggles with her own sense of self due to scattered childhood
        <Spacer/>
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} size="lg"/>        
      <FontAwesomeIcon icon={faEdit} size="lg"/>
      </Flex>

      <Box ml="10px">
        <Flex>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/> Elf dad was disowned by his family and died
        <Spacer/>
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} p="3px" size="lg"/>        
      <FontAwesomeIcon icon={faEdit} p="3px" size="lg"/>
      </Flex>
      </Box>

      </ListItem>


        <ListItem>
        <Flex>
      Was friendly with Lila with the sole purpose of wanting to find out more about her culture
      <Spacer/>
      <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} p="3px" size="lg"/>        
      <FontAwesomeIcon icon={faEdit} p="3px" size="lg"/>
        </Flex>
        </ListItem>
        <NavLink to={`/`}><Text textAlign="center" marginY="30px" fontWeight="bold" fontSize="15px" opacity="50%"><FontAwesomeIcon icon={faPlus}/> Add New Note...</Text></NavLink>

    </List>
    </AccordionPanel>
  </AccordionItem>


</Accordion>



{/* RoadTrip Arc */}
<Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
      <AccordionButton  bg="red.200">
        <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="bold">
          Portal Arc
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <List spacing={3}>
      <ListItem>
        <Flex>
      Falls into a portal that turns her into a cat
      <Spacer/>
      <FontAwesomeIcon icon={faPlus} size="lg"/>
      <FontAwesomeIcon icon={faTrash} size="lg"/>
      <FontAwesomeIcon icon={faEdit} size="lg"/>
        </Flex>

        <Flex>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/> Lila finds her, didn't know she was Quinn
        <Spacer/>
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} size="lg"/>        
      <FontAwesomeIcon icon={faEdit} size="lg"/>
      </Flex>

      <Box ml="10px">
        <Flex>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/> She finds out a lot more about Lila and empathises with her
        <Spacer/>
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} p="3px" size="lg"/>        
      <FontAwesomeIcon icon={faEdit} p="3px" size="lg"/>
      </Flex>
      </Box>

      </ListItem>


        <ListItem>
        <Flex>
      Meets Cade who hates cats
      <Spacer/>
      <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} p="3px" size="lg"/>        
      <FontAwesomeIcon icon={faEdit} p="3px" size="lg"/>
        </Flex>
        
        <Flex>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/> Hates Cade anyway so it doesnt matter
        <Spacer/>
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} size="lg"/>        
      <FontAwesomeIcon icon={faEdit} size="lg"/>
      </Flex>

      <Box ml="10px">
        <Flex>
        <FontAwesomeIcon icon={faArrowRight} size="lg"/> But she enjoys bullying him a lot - to be addressed in next arc
        <Spacer/>
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        <FontAwesomeIcon icon={faTrash} p="3px" size="lg"/>        
      <FontAwesomeIcon icon={faEdit} p="3px" size="lg"/>
      </Flex>
      </Box>
        </ListItem>
        <NavLink to={`/`}><Text textAlign="center" marginY="30px" fontWeight="bold" fontSize="15px" opacity="50%"><FontAwesomeIcon icon={faPlus}/> Add New Note...</Text></NavLink>
        

    </List>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<NavLink to={`/`}><Text textAlign="center" marginY="30px" fontWeight="bold" fontSize="20px" opacity="50%"><FontAwesomeIcon icon={faPlus}/> Add New...</Text></NavLink>

    </>
  )
}

export default Notes
