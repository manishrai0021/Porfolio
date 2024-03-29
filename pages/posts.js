import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbnail from '../public/images/works/Soon.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popolar Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        title="How to build a portfolio Nepal."
                        thumbnail={thumbnail}
                        href="/"
                    />
                    <GridItem
                        title="How to Start Freelancing Nepal."
                        thumbnail={thumbnail}
                        href="/"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        title="How to build a Business by Scratch from Nepal."
                        thumbnail={thumbnail}
                        href="/"
                    />
                    <GridItem
                        title="How to Start Fitness training in Nepal."
                        thumbnail={thumbnail}
                        href="/"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.5}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        title="How to buy food in Nepal"
                        thumbnail={thumbnail}
                        href="/"
                    />
                    <GridItem
                        title="How to let them know you r from NEPAL."
                        thumbnail={thumbnail}
                        href="/"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
// export { getServerSideProps } from '../components/chakra'