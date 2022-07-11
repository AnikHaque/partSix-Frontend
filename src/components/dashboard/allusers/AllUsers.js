import React from 'react'
import { useQuery } from 'react-query';
import { Loading } from '../../loading/Loading';

export const AllUsers = () => {
  const {data: users,isLoading} = useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>AllUsers: {users.length}</div>
  )
}
