import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Background from './hero.jpg'
import LogoImg from './Logo.png'
import Waves from './Waves'

let HeaderWrapper = styled.header`
  height: 95vh;
  width: 100%;
  position: relative;
  background: ${props => props.theme.purple};
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
  font-family: ${props => props.theme.sans};
  margin: 0 auto;
  color: white;
`

let GreetingText = styled.h3`
  font-size: 20px;
  margin: 0;
`

let GreetingHeader = styled.h1`
  font-size: 48px;
  margin: 0;
`

let GreetingCopy = styled.p`
  font-family: ${props => props.theme.serif};
  width: 50%;
`

let HeaderCopy = styled.div`
  display: flex;
  flex-direction: column;
`

export default class header extends Component {
  constructor(props) {
    super(props)

    this.Greeter = this.Greeter.bind(this)
  }

  Greeter() {
    var today = new Date()
    var hourNow = today.getHours()

    if (hourNow > 18) {
      return 'Good evening!'
    } else if (hourNow > 12) {
      return 'Good afternoon!'
    } else if (hourNow > 0) {
      return 'Good morning!'
    } else {
      return 'Welcome!'
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <NavWrapper>
          <Logo src={LogoImg} />
        </NavWrapper>
        <HeaderInner>
          <HeaderCopy>
            <GreetingText>{this.Greeter()}</GreetingText>
            <GreetingHeader>My name's Ste!</GreetingHeader>
            <GreetingCopy>
              I’m a full stack web developer based in Leeds, England. I like to
              make bold, beautiful websites that don’t take themselves too
              seriously.
            </GreetingCopy>
          </HeaderCopy>
        </HeaderInner>
        <Waves />
      </HeaderWrapper>
    )
  }
}
