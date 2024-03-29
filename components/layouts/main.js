import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'
import VoxelCar from '../voxel-car'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>King - Creation</title>
            </Head>
            <NoSsr>
                <NavBar path={router.asPath} />
            </NoSsr>
            <Container maxW="container.md" pt={16}>
                <NoSsr>
                    <VoxelCar />
                </NoSsr>
                {children}
            </Container>
            <NoSsr>
                <Footer path={router.asPath} />
            </NoSsr>
        </Box>
    )
}

export default Main