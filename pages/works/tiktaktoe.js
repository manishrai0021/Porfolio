import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="One Piece">
        <Container>
            <Title>
                Circulation <Badge>Game</Badge>
            </Title>
            <P>
                A simple game of "X" and "O".
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://manishrai0021.github.io/manishTikTacToe/'>
                        Go to Site <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML, CSS, JS</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/Circulation.png" alt="OnePiece"/>
        </Container>
    </Layout>
)

export default Work