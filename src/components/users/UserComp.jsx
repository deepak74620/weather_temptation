'use client'
import { sendFriendRequest } from '@/app/api/utils/friends'
import { Tooltip, User } from '@nextui-org/react'
import { UserPlus } from 'lucide-react'
import React from 'react'

const UserComp = ({user,setUpdate,friend}) => {

    const handleSendRequest =async ()=>{
        try {
            console.log('hey')
           const send = await sendFriendRequest(user._id) 
           if(send){
            setUpdate(prev=>!prev)
            console.log(send)
           }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='p-2 border-2 flex items-center justify-between'>
      <div className=''>
      <User
      name={user?.name}
      description={user?.email}
      avatarProps={{
        src: user?.imgSrc,
        fallback: user?.email?.slice(0, 2).toUpperCase(),
      }}
    />
      </div>
      {
        !friend &&<div className='flex items-center justify-center cursor-pointer' onClick={handleSendRequest}>
        {/* <Tooltip content={<>
            <h2 className='text-black'>Add Friend</h2>
            </>}> */}

      <UserPlus />
        {/* </Tooltip> */}
      </div>
      }
    </div>
  )
}

export default UserComp
