import React from 'react'
import { FlexRedes } from './css/RedSocial'
import { BiLogoFacebook,BiLogoInstagram,BiLogoLinkedin } from 'react-icons/Bi';
const RedSocial = () => {
  return (
    <FlexRedes>
        <span><BiLogoFacebook/></span>
        <span><BiLogoInstagram/></span>
        <span><BiLogoLinkedin/></span>
    </FlexRedes>
  )
}

export default RedSocial