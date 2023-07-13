import React from 'react'
import { FooterStyled } from './css/Footer'
import Link from 'next/link'

const Footer = () => {
  return (
    <FooterStyled>
        Copyright By <span><Link target='_blank' href={"https://github.com/zLuciel"}> ঔৣ۝Ness۝ঔৣ</Link></span>
    </FooterStyled>
  )
}

export default Footer