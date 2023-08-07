import React from 'react'
import { BtnSvgStyled } from './css/BtnCircleSvg'

const BtnCircleSvg = ({handleClick,svg,$matchFavorite,$fav}) => {
  return (
    <BtnSvgStyled $matchFavorite={$matchFavorite} $fav={$fav} onClick={handleClick}>
    {svg}
   </BtnSvgStyled>
  )
}

export default BtnCircleSvg