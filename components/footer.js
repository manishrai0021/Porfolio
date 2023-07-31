import {
    Box,
    Link,
    Heading,
    Flex,
} from '@chakra-ui/react'
import React from 'react'

const footer = () => {
    return (
        <Box as="main" p={8}>
            <Flex>
                <Heading as={Link} variant="section-Inspiration" href="https://github.com/craftzdog" >Inspiration: Takuya Matsuyama</Heading>
            </Flex>
        </Box>
    )
}

export default footer