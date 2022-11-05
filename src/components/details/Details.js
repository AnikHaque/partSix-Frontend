import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Details.css";
import Navbar from "../navbar/Navbar";

const Details = () => {
    const {id} = useParams();
    const [docs,setDocs] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`  https://whispering-bayou-93638.herokuapp.com/hospitaldoctors/${id}`)
       .then(res=>res.json())
        .then(data=>setDocs(data))
     },[])
     const { register, handleSubmit, reset } = useForm();    
const handleChange = event => {
    const disable = event.target.value;
    setDisable(disable);
  };

  return (
    <div className="">
    
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[100px] container mx-auto p-3 px-6 ">
        <div className="text-d">
          <div className="w-[300px] h-[300px]"> 
          <img
            src={docs.image}
            className="flex-shrink-0  h-[96%] w-[100%] mx-14 object-cover"
          ></img>
          </div>
         
          <h1 className="font-bold text-primary ml-20 mt-5 text-3xl">
            {docs.name}
          </h1>
          <ul className="list-t">
            <li className="text-t ml-24">
              <b>Designation:</b> {docs.designation}
            </li>
            <li className="text-t ml-24">
              <b>specialization Area:</b> {docs.specialization}
            </li>
            <li className="text-t ml-24">
              <b>Department:</b> {docs.department}
            </li>
            <li className="text-t ml-24">
              <b>Hospital:</b> {docs.hospital}
            </li>
            <li className="text-t ml-24">
              <b>Location:</b> {docs.location}
            </li>
            
          </ul>
        </div>
        <div className="mt-[30px] md:mt-0">
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Education Qualification:
            </h1>
            <p>{docs.education}</p>
          </div>
          <br></br>
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Training Programme/ Workshop Attended:
            </h1>
            <p>{docs.training}</p>
          </div>
          <br></br>
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Books Authored/Research Papers published
            </h1>
            <p>{docs.books}</p>
<br></br>
<br></br>
<br></br>

            <Link to="/appointment">
              
             <button className="btn btn-primary">Book Appointment</button>
            
          </Link>
            <Link to="/email" className="ml-12">
              
             <button className="btn btn-secondary">Send Email</button>
            
          </Link>
          </div>
        </div>
      </div>
      <div>
     
      </div>
    </div>
  );
};
export default Details;
