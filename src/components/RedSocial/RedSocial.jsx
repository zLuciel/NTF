import React from 'react'
import { FlexRedes } from './css/RedSocial'
import { LiaFacebookF,LiaInstagram,LiaLinkedinIn } from 'react-icons/lia';
const RedSocial = () => {
  return (
    <FlexRedes>
        <span><LiaFacebookF/></span>
        <span><LiaInstagram/></span>
        <span><LiaLinkedinIn/></span>
    </FlexRedes>
  )
}

export default RedSocial