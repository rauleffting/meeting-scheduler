import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Easy Scheduling
        </Heading>
        <Text size="xl">
          Connect your calendar and let people book appointments in their free
          time.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendar symbolizing application in operation"
        />
      </Preview>
    </Container>
  )
}
