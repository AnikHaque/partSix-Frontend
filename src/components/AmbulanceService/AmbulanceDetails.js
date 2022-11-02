import React from 'react';
import DetailImage1 from '../../../assets/Ambulance-images/service-details1.jpg';


const AmbulanceDetails = () => {
  return (
    <div>
      <h1 className='text-center text-xl pt-10 pb-10 font-bold text-gray-900 md:text-4xl'><span className='text-primary'>Ambulance</span> Car Details</h1>

    <div className='container max-w-screen-lg mx-auto text-center items-center justify-center'>
      {/* Details Section  */}
      <div className='container max-w-screen-lg mx-auto'>
        {/* Images  */}
        <div className='container max-w-screen-lg mx-auto text-center pb-10'>
          <img src={DetailImage1} alt="" width="887" height="550" />
        </div>
        {/* Details Content-1 */}
        <div>
          <h2 className='text-primary text-2xl pb-3 font-bold text-left'>Ambulance Car</h2>
          <p className=' text-gray-500 text-semibold pr-40 text-left'>Aliquam egestas dolor at ullamcorper accumsan refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s.</p>
          <br />
          <p className='text-gray-500 text-semibold pr-40 text-left'>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>

        {/* Details Content-2 */}
        <div className='box-border hover:box-content container max-w-screen-lg mx-auto mt-7'>
          <div className='flex space-x-3 gap-10'>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title pb-3"><span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span> Help us Save a Life</h2>
            <p>Proin gravida, urna et cursus aliquam, velit felis</p>
            </div>
          </div>
          
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title pb-3"><span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span> Join our Big Family</h2>
            <p>Nullam mollis elit quis dusto is lacinia efficitur</p>
            </div>
          </div>

          </div>
        </div>

        <br />
        {/* Details Content-3 */}
        <div>
          <p className=' text-gray-500 text-semibold mt-5 pr-40 text-left'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AmbulanceDetails;