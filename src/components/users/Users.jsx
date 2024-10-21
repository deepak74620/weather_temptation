'use client'
import { getAllUsers } from '@/app/api/utils/users';
import { User } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import UserComp from './UserComp';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [update,setUpdate] =useState(true)
  const getUsersList = async () => {
    try {
      const users = await getAllUsers();
      if (users) {
        console.log(users);
        setUsers(users.data.ref);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsersList();
  }, [update]);
  return (
    <div className='p-4'>
        Users
        <div className="grid grid-cols-4 gap-4 p-2">

      {
          users?.map((user,_)=>{
              return<>
             <UserComp user={user} setUpdate={setUpdate}/>
            </>
        })
    }
      
      
    </div>
    </div>
  )
}

export default Users
