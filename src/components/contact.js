import React, { Component } from 'react'
import Confetti from 'react-dom-confetti'

import styled from 'styled-components'

const SubmitButton = styled.button`
  border-radius: 5px;
  border: none;
  background: ${props => props.theme.pink};
  padding: 10px 15px;
  color: white;
  font-family: ${props => props.theme.sans};
`

const ContactWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
`

const ContactInner = styled.div`
  border-top: 5px solid ${props => props.theme.purple};
  box-shadow: ${props => props.theme.bs};
  max-width: ${props => props.theme.maxWidth};
  padding: 30px;
  display: block;
`

const Title = styled.h2`
  font-family: ${props => props.theme.sans};
  color: ${props => props.theme.grey};
  padding: 15px 0;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.32);
`

const Label = styled.label`
  font-family: ${props => props.theme.sans};
  font-weight: 100;
`

const Message = styled.textarea`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.32);
`

export default class contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false,
    }
  }

  handleConfetti = () => {
    this.setState(
      prevState => ({
        submitted: !prevState.submitted,
      }),
      () => {
        this.setState(prevState => ({ submitted: !prevState.submitted }))
      }
    )
  }

  render() {
    return (
      <div>
        <ContactWrapper>
          <ContactInner>
            <Title>Contact</Title>
            <Message />
            <SubmitButton onClick={this.handleConfetti}> Submit </SubmitButton>
            <Confetti active={this.state.submitted} />
          </ContactInner>
        </ContactWrapper>
      </div>
    )
  }
}
