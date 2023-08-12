import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import HeroBackground from '../../assets/hero-background.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Image
          src={HeroBackground}
          height={681}
          quality={100}
          priority
          alt="grid"
        />
        <Heading as="h1" size="4xl">
          Schedule made easy
        </Heading>
        <Text size="xl">
          Connect your calendar and let people book appointments in their free
          time.
        </Text>

        <ClaimUsernameForm />
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
