import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import SaralPrint from '../public/images/works/SaralPrint.jpeg'
import TikTakToe from '../public/images/works/TikTakToe.png'
import Soon from '../public/images/works/Soon.png'
import Worked from '../public/images/works/Soon.png'
import Circulation from '../public/images/works/Soon.png'
import MD from '../public/images/works/Meira/MD.png'
import Zunotox from '../public/images/works/zunotox.jpeg'

const Works = () => {
  const works = [
    {
      name: 'SaralPrint',
      desc: 'Ecommerce Platform',
    },
    {
      name: 'TikTakToe',
      desc: 'Platform to design and order .s online.',
      img: Worked
    },
    {
      name: 'Working',
      desc: 'Working game for fun.',
      img: Circulation
    },
    {
      name: 'Will Work',
      desc: 'Will Work for people to connect and share moments.',
      img: Worked
    },
    {
      name: 'Worked .',
      desc: 'Platform to design and order .s online.',
      img: Worked
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
          <WorkGridItem id="saralprint" title={works[0].name} thumbnail={SaralPrint}>
            {works[0].desc}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="tiktaktoe" title={works[1].name} thumbnail={TikTakToe}>
            {works[1].desc}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Circulation" title={works[2].name} thumbnail={Circulation}>
            {works[2].desc}
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="one" title={works[3].name} thumbnail={Soon}>
            {works[3].desc}
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="one" title="Creation" thumbnail={Soon}>
            Farming Revolution
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
          <WorkGridItem id="meira" title={colaboration[0].name} thumbnail={MD}>
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
