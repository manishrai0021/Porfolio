import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue, 
    Button,
    Link,
    SimpleGrid,
    List,
    ListItem,
    color
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter , IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { AiFillYoutube } from 'react-icons/ai'


const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                    Creation, Hello, I&apos;m a full-stack developer based in Nepal!
                </Box>
                <Box dispaly={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Manish Kumar Rai aka #Zunotox
                        </Heading>
                        <p>Digital Craftzman ( Artist / Developer /Designer / Youtuber)</p>
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
                        with a passion in learning and developing High End softwares for 
                        mass general public. He is fond of building softwares and services 
                        that helps daily life of people easiest as possible. He seeks to 
                        stackup featured softwares which doesn't make people addictive 
                        instead usefull in solving simple, huge, important problems.</Paragraph>
                    <Heading as="h4" variant="section-clients" color="white">Clients Count = 4+</Heading>
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
                        <BioYear>2020</BioYear>
                        COVID : )
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - Present</BioYear>
                        Bsc.IT(hons) in Itahari International College
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 - 4 months</BioYear>
                        Frontend Web Developer in BlueFox Pvt. Ltd.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Full Dev | Designer | Creator
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Art, Music
                         {/* {''}, */}
                        , Drawing
                        {/* <Link href="">Drawing</Link> */}
                        , Hiking, Photography
                        {/* <Link href="">Photography</Link> */}
                        , Tech, Travelling
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/manishrai0021" target='_blank'>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub/>} >
                                    @manish0021
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/ManishKRme" target='_blank'>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoTwitter/>} >
                                    @ManishKR
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/manish_k_rai/" target='_blank'>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram/>} >
                                    @manish_k_rai
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://youtube.com/@DevDaiOfficial?si=K1jQiw_cq4DK9Wy-" target='_blank'>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<AiFillYoutube/>} >
                                    @devdai
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/posts"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            Popular posts
                        </Button>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page