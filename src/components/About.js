import React, { Component } from 'react'
import styled from 'styled-components'

let AboutWrapper = styled.div`
  height: 30vh;
  width: 100%;
`

export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
        {console.log(this.props.theme)}
        Test
      </AboutWrapper>
    )
  }
}
