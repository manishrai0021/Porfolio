import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'


import MD from '../../public/images/works/Meira/MD.png'
import Cover from '../../public/images/works/Meira/Cover.png'
import Flex from '../../public/images/works/Meira/Flex.png'

const Meira = () => {
    const works = [
        {
            name: 'Logo',
            desc: 'Created a Logo for Meira Dreams.',
            img: MD
        },
        {
            name: 'Cover',
            desc: 'Made Cover Photo for Facebook, Instagram and WhatsAPP',
        },
        {
            name: 'Flex',
            desc: 'Will Work for people to connect and share moments.',
            img: MD
        },
        {
            name: 'Worked .',
            desc: 'Platform to design and order .s online.',
            img: MD
        }
    ]
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="Worked" title={works[0].name} thumbnail={MD}>
                        {works[0].desc}
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Circulation" title={works[1].name} thumbnail={Cover}>
                        {works[1].desc}
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="one" title={works[2].name} thumbnail={Flex}>
                        {works[2].desc}
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Meira
