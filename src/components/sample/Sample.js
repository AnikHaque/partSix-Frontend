import React from 'react'
import './Sample.css';
export const Sample = () => {
  return (
    <div className='grid lg:grid-cols-5 bg-white p-12 sm:grid-cols-2 gap-10'>
<div >
<img className='sample' src='https://cdn.shopify.com/s/files/1/0307/4529/7028/files/image_7.png?v=1580643162'></img>
<h6 className='text-1xl font-bold mx-12'>Bettry</h6>
</div>
<div>
<img className='sample' src='https://cdn.shopify.com/s/files/1/0307/4529/7028/files/image_8.png?v=1580643170'></img>
<h6 className='text-1xl font-bold mx-12'>Tools</h6>
</div>

<div>
<img className='sample' src='https://cdn.shopify.com/s/files/1/0307/4529/7028/files/image_9.png?v=1580643179'></img>
<h6 className='text-1xl font-bold mx-12'>Rake</h6>
</div>

<div>
<img className='sample' src='https://cdn.shopify.com/s/files/1/0307/4529/7028/files/image_10.png?v=1580643187'></img>
<h6 className='text-1xl font-bold mx-12'>Cultivator</h6>
</div>
<div>
<img className='sample' src='https://cdn.shopify.com/s/files/1/0307/4529/7028/files/image_11.png?v=1580643199'></img>
<h6 className='text-1xl font-bold mx-12'>Ladder</h6>
</div>


    </div>
  )
}
