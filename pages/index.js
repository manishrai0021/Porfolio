import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue, 
    Button,
    Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                    Hello, I&apos;m a full-stack developer based in Nepal!
                </Box>
                <Box dispaly={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Manish Kumar Rai aka #Zunotox
                        </Heading>
                        <p>Digital Craftzman ( Artist / Developer /Designer)</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base:4, md:0}} ml={{ md: 6}} align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/PP.JPG" 
                            alt="Profile Image" 
                            />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Manish is a indie and a fullstack developer based in Nepal 
                        with a passion in learning and developing High End Softwares for 
                        mass general public. He is fond of building products and services 
                        that helps daily life of people easiest as possible. He seeks to 
                        stackup featured software which doesn't make people addictive 
                        instead usefull in solving simple, huge, important problems and 
                        obstacle of common people.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal" >
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        Born in Kerabari (केराबारी), Nepal
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed +2 Commerce in Dharan Adarsha
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - Present</BioYear>
                        Bsc.IT(hons) in Itahari International College
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Art, Music, {''}
                        <Link href="">Drawing</Link>
                        , Hiking, {''}
                        <Link href="">Photography</Link>
                        , Tech, Travelling
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page