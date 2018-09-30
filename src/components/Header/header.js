import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Background from './hero.jpg'
import LogoImg from './Logo.png'
import Waves from './Waves'

let HeaderWrapper = styled.header`
  height: 95vh;
  width: 100%;
  background-image: linear-gradient(
      -134deg,
      RGBA(95, 76, 255, 0.65) 0%,
      RGBA(95, 76, 255, 0.65) 100%
    ),
    url(${Background});
  background-size: cover;
  position: relative;
`

let NavWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
`
let Logo = styled.img`
  max-width: 180px;
`

let HeaderInner = styled.div`
  display: flex;
  max-width: 1000px;
  padding: 15px;
`

export default class header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <NavWrapper>
          <Logo src={LogoImg} />
        </NavWrapper>

        <Waves />
      </HeaderWrapper>
    )
  }
}
