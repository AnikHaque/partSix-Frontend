import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
const Medicines = ({medicines}) => {
  const {
    _id,
    name,
    des,
    price,
    images,
  image,
    review
  } = medicines;

  return (
    <div>
     
  <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img src={image} className='lg:max-w-lg' alt="Shoes" /></figure>

  <div className="card-body">
    <h2 className="font-bold text-primary">
      {name}
    
    </h2>
    <div className="card-actions justify-start">
      <div className="badge badge-outline font-bold">$ {price}</div> 
      <div className="badge badge-outline font-bold">* {review}</div>
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
