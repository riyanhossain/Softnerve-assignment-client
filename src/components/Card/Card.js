import React from 'react'
import CardDeleteButton from './CardDeleteButton';
import CardUpdateButton from './CardUpdateButton';

export default function Card(props) {
    const { student } = props;
    const { _id, name, email, class: className, rollno, address } = student;
  return (
    <div className='h-48 w-96 bg-white shadow mt-4 flex flex-col justify-center items-center'>
        <div className='p-4 w-full'>
            <h1 >Name: {name}</h1>
            <h1 >Email: {email}</h1>
            <h1 >Class: {className}</h1>
            <h1 >Rollno: {rollno}</h1>
            <h1 >Address: {address}</h1>
        </div>
        <div className='w-11/12 flex justify-center items-center gap-x-2'>
            <CardUpdateButton id={_id}/>
            <CardDeleteButton id={_id}/>
            
        </div>
        
    </div>
  )
}
