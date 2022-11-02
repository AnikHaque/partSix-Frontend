import React from "react";
import { Link } from "react-router-dom";
import "./Unique.css";
const Unique = (props) => {
  const {
    _id,
    name,
    description,
    addedBy,
    image,
    blogImage,
    addedTime,
    comment,
    reviews,
  } = props.tool;

  return (
    <div>
      <div className="card bb lg:max-w-lg bg-base-100">
        <figure className=" ">
          <img src={blogImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2">
            <img src={image} className="instructor-img "></img>
            <h1 className="font-card text-center font-bold">{addedBy} </h1>
          </div>
          <div>
            <h1 className="font-bold text-[#1b82e2] mt-5">{name}</h1>
          </div>
          <div className="grid lg:grid-cols-1 sm:grid-cols-1">
            <p>{description.slice(0, 90)}...</p>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-2">
            <p className="mr-2">
              <i class="fa-solid fa-comment text-[#1b82e2]"></i> Comments(
              {comment})
            </p>
            <p className="ml-2">
              <i class="fa-solid fa-star text-amber-400"></i> Ratings({reviews})
            </p>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-2">
            <Link to={`/news/${_id}`}>
              <button className="font-bold text-[#1b82e2] text-xl mt-[10px]">
                <i class="fa-solid fa-eye"></i> Read More{" "}
                {/* <i class="fa-solid fa-arrow-right"></i> */}
              </button>
            </Link>
          </div>
        </div>
      </div>

     

    </div>
  );
};
export default Unique;
