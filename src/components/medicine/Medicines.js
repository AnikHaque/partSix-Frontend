import React from "react";
import { Link } from "react-router-dom";
import './Medicines.css';
const Medicines = ({medicines}) => {
  const {
    _id,
    name,
    des,
    description,
    price,
    images,
  image,
    review
  } = medicines;

  return (
    <div>
     
  <div className="card lg:max-w-sm bg-base-100 shadow-xl medicine-card">
  <figure><img src={image} className='w-48' alt="Shoes" /></figure>

  <div className="card-body">
  <div className="font-bold"><i class="fa-solid fa-star text-yellow-500"></i> <i class="fa-solid fa-star text-yellow-500"></i> <i class="fa-solid fa-star text-yellow-500"></i> <i class="fa-solid fa-star text-yellow-500"></i> ({review})</div>
    <h2 className="font-bold text-primary">
      {name}
    
    </h2>
   
    <div className="card-actions justify-start">
      <div className=" font-bold">$ {price}.00</div> 
    </div>
    <div className="card-actions justify-end">
        <Link to={`/medicine/${_id}`}>
        <button className="btn btn-primary text-white-500 font-bold">Add To Cart</button>
        </Link>
    </div>
  </div>
</div>

     

    </div>
  );
};
export default Medicines;
