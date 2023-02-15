import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="One Piece">
        <Container>
            <Title>
                One Piece <Badge>2022</Badge>
            </Title>
            <P>
                A Jorney to find the world's greatest treasure in history
                The ONE PIECE.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>
                        Open Piece <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, Electron, React Native</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/work.jpg" alt="OnePiece"/>
        </Container>
    </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'