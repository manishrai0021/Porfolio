import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Thumbnail from '../public/images/works/work.jpg'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="onepiece" title="One Piece" thumbnail={Thumbnail}>
                        App to Treasure
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="one" title="Two Piece" thumbnail={Thumbnail}>
                        App to Treasure Two
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="one" title="One 1Piece" thumbnail={Thumbnail}>
                        App Devil to Treasure
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="one" title="Two 1Piece" thumbnail={Thumbnail}>
                        App Devil to Treasure Two
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Colaborations
                </Heading>
            </Section>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3} >
                    <WorkGridItem id="one" title="One 3Piece" thumbnail={Thumbnail}>
                        App to Treasure
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="one" title="Two 3Piece" thumbnail={Thumbnail}>
                        App to Treasure Hell
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem id="one" title="One 4Piece" thumbnail={Thumbnail}>
                        App Devil to Hell Fire 
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem id="one" title="Two 4Piece" thumbnail={Thumbnail}>
                        App Devil to Hellish Angel
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works