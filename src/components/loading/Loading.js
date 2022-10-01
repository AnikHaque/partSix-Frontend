import React from 'react'
import { Circles } from  'react-loader-spinner'
import './Loading.css';
export const Loading = () => {
  return (
    <div>
    <Circles
    
  height="100"
  width="190"
  color="#518378"
  ariaLabel="circles-loading"
  
  wrapperClass="hello"
  visible={true}
/>
    </div>
  )
}
