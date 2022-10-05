import React from 'react'
import { useQuery } from 'react-query';
import { Loading } from '../../loading/Loading';
import UserRow from '../UserRow';

export const AllUsers = () => {
  const {data: users,isLoading,refetch} = useQuery('users',()=>fetch('https://dry-brook-75772.herokuapp.com/user',{
  method:'GET',
  headers:{
    authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
  }).then(res=>res.json()));
  if(isLoading){
    return <Loading></Loading>
  }
  return (
  
    <div class="overflow-x-auto">
                <table class="table w-full bg-myorder">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
    
    
   
  )
}
