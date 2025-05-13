import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Box, Text, Image} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCamera, faEdit, faStepBackward, faPlus } from '@fortawesome/free-solid-svg-icons'

//testing
import johnny from '../assets/images/johnny.jpg'
import lila from '../assets/images/lila.png'
import quinn from '../assets/images/quinn.png'
import cade from '../assets/images/cade.png'

const Characters = () => {
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
        <NavLink to={`/`}>
    <Box p="20px">
    <Flex>
    <FontAwesomeIcon icon={faStepBackward} size="lg" fontSize="30px"/>
    <Text fontWeight="bold" ml="15px">Back</Text>
    </Flex>
    </Box>
    </NavLink>
    <Box w='100%'>
    <Text style={heading}>Characters</Text>
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={400}>

{/* Card 1 */}
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Image
        objectFit='cover'
        w='200px'
        h='200px'
        src={lila}
        alt='Lila'
    />
    <Stack>
        <CardBody>
        <Heading size='lg'>Lila</Heading>
        <Text py='2'><b>Gen Z Elf attending college in Tasmania</b></Text>
        </CardBody>
        <Flex>
            <Box p='2'>
            <NavLink to={`/notes`}> <Button variant='solid' colorScheme='red'>View Notes</Button></NavLink>
            </Box>
            <Spacer/>
            <Box p='2'><FontAwesomeIcon icon={faEdit} size='lg'/></Box>
            <Box p='2'><FontAwesomeIcon icon={faCamera} size='lg'/></Box>
        </Flex>

    </Stack>
    </Card>

    {/* Card 2 */}
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Image
        objectFit='cover'
        w='200px'
        h='200px'
        src={quinn}
        alt='Quinn'
    />
    <Stack>
        <CardBody>
        <Heading size='lg'>Quinn</Heading>
        <Text py='2'><b>Half-human elf on a road trip to Tasmania</b></Text>
        </CardBody>
        <Flex>
            <Box p='2'>
            <NavLink to={`/notes`}> <Button variant='solid' colorScheme='red'>View Notes</Button></NavLink>
            </Box>
            <Spacer/>
            <Box p='2'><FontAwesomeIcon icon={faEdit} size='lg'/></Box>
            <Box p='2'><FontAwesomeIcon icon={faCamera} size='lg'/></Box>
        </Flex>
    </Stack>
    </Card>

    {/* Card 3 */}
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Image
        objectFit='cover'
        w='200px'
        h='200px'
        src={cade}
        alt='Cade'
    />
    <Stack>
        <CardBody>
        <Heading size='lg'>Cade</Heading>
        <Text py='2'><b>Human who moved from Brisbane to Tasmania</b></Text>
        </CardBody>
        <Flex>
            <Box p='2'>
            <NavLink to={`/notes`}> <Button variant='solid' colorScheme='red'>View Notes</Button></NavLink>
            </Box>
            <Spacer/>
            <Box p='2'><FontAwesomeIcon icon={faEdit} size='lg'/></Box>
            <Box p='2'><FontAwesomeIcon icon={faCamera} size='lg'/></Box>
        </Flex>
    </Stack>
    </Card>



    <Card >
    <NavLink to={`/`}><Text textAlign="center" marginY="30px" fontWeight="bold" fontSize="30px" opacity="50%"><FontAwesomeIcon icon={faPlus}/> Add New Card</Text></NavLink>
    </Card>
    </SimpleGrid>

    </Box>
    </>
  )
}

export default Characters
