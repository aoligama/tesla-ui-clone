import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Burger, Footer } from './styles'

const Overlay = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Tesla UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💙</a>
          </li>
          <li>
            <a href="#">by Amanda Gama</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default Overlay