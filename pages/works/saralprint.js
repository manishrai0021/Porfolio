import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Saral Print">
        <Container>
            <Title>
                Saral Print <Badge>Ecommerce</Badge>
            </Title>
            <P>
                Platform where everything related to printing any sort of items with customization and huge categories of type of items online in simple steps. It was a CRUD site with payment integration meaning people can order and pay online.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/works/saralprint'>
                        Site is Private for Now <WarningIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Axios, Tailwind, React, Postman, MUI, Laravel </span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/SaralPrint.jpeg" alt="OnePiece"/>
        </Container>
    </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'