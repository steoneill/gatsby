import React from 'react'
import styled from 'styled-components'

let Waves = styled.svg`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 368px;
  display: block;

  path {
    width: 100%;
  }
`

export default class HeaderWave extends React.Component {
  render() {
    return (
      <Waves width="100%" viewBox="0 0 1920 368" version="1.1">
        <path fill="#F8F8F8" fillOpacity="0.2">
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="35s"
            values="
            M1920,165c0,0-132.3-165-422-165c-256.8,0-733.2,214-990,214C192.8,214,0,165,0,165l0,243h1920V165z;
          M1920,161c0,0-132.3,95-422,95C1241.2,256,764.8,0,508,0C192.8,0,0,161,0,161l0,243h1920V161z;
          M1920,165c0,0-132.3-165-422-165c-256.8,0-733.2,214-990,214C192.8,214,0,165,0,165l0,243h1920V165z
     "
          />
        </path>
        <path fill="#F8F8F8">
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="35s"
            values="
            M0,216c0,0,132.3-125,422-125c256.8,0,733.2,174,990,174c315.2,0,508-49,508-49v192H0V216z;
            M0,212c0,0,132.3,95,422,95c256.8,0,733.2-266,990-266c315.2,0,508,171,508,171v192H0V212z;
          M0,216c0,0,132.3-125,422-125c256.8,0,733.2,174,990,174c315.2,0,508-49,508-49v192H0V216z
            "
          />
        </path>
      </Waves>
    )
  }
}
