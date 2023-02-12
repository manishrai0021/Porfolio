import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Nepal!
            </Box>
            <Box dispaly={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Manish Kumar Rai aka #Zunotox
                    </Heading>
                    <p>Digital; Craftzman ( Artist / Developer /Designer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page