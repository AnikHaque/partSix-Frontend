import React from 'react'
import { useQuery } from 'react-query';
import { Loading } from '../../loading/Loading';
import UserRow from '../UserRow';

export const AllUsers = () => {
  const {data: users,isLoading,refetch} = useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>AllUsers: {users.length}
    <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
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
    
    
    </div>
  )
}
