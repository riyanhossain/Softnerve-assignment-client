import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CardUpdateButton(props) {
  const navigate = useNavigate();
  const { id } = props;
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white p-1 w-full' onClick={()=> navigate(`/update-student/${id}`)}>Update</button>
  )
}
