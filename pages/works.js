import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Thumbnail from '../public/images/works/work.jpg'
import SaralPrint from '../public/images/works/SaralPrint.jpeg'
import TikTakToe from '../public/images/works/TikTakToe.png'
import MD from '../public/images/works/MD.png'
import Zunotox from '../public/images/works/zunotox.jpeg'

const Works = () => {
  const works = [
    {
      name: 'Saral Print',
      desc: 'Platform to design and order prints online.',
      img: SaralPrint
    },
    {
      name: 'Tik Tak Toe',
      desc: 'Tik Tak Toe game for fun.',
      img: TikTakToe
    },
    {
      name: 'Social Media',
      desc: 'Social Media for people to connect and share moments.',
      img: SaralPrint
    },
    {
      name: 'Saral Print',
      desc: 'Platform to design and order prints online.',
      img: SaralPrint
    }
  ]
  const colaboration = [
    {
      name: 'Meira Dreams',
      desc: 'Logo Design',
      img: MD
    },
    {
      name: 'Zunotox',
      desc: 'Logo Design',
      img: Zunotox
    }
  ]
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="onepiece"
            title={works[0].name}
            thumbnail={SaralPrint}
          >
            {works[0].desc}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="one" title={works[1].name} thumbnail={TikTakToe}>
            {works[1].desc}
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="one" title={works[2].name} thumbnail={Thumbnail}>
            {works[2].desc}
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="one" title="One Piece" thumbnail={Thumbnail}>
            App to Treasure
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Colaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="one" title={colaboration[0].name} thumbnail={MD}>
            {colaboration[0].desc}
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="one" title={colaboration[1].name} thumbnail={Zunotox}>
            {colaboration[1].desc}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
