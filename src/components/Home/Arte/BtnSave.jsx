"use client"
import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BtnSaveStyled, FlexSpanBtn } from './css/BtnSave';
import { useDispatch } from 'react-redux';
import { dataEdit } from '@/redux/users/userSlice';
import { useRouter } from 'next/navigation';
const BtnSave = ({edit,data}) => {
  const dispatch = useDispatch() 
  const router = useRouter();

  function handleEdit(){
     dispatch(dataEdit(data))
     router.push('/dashboard/create');
  }

  return (
    <FlexSpanBtn>
    <BtnSaveStyled>
      {edit ? <FiEdit onClick={handleEdit} className='icon-favorite lg'/> :  <AiFillHeart className='icon-favorite'/>}
    </BtnSaveStyled>
    </FlexSpanBtn>
  )
}

export default BtnSave