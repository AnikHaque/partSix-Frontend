import React, { useEffect, useState } from 'react';
import Logo from "../assets/Logo-removed BG.png";
import { Link, useNavigate } from 'react-router-dom';

export const NavigationBar = () => {
   


    
   
    return (
        <div className='' >
            <div className="md:w-[80vw] md:rounded-full md:absolute md:top-[6%] md:left-[10%] navbar w-screen text-black bg-slate-100  mx-auto z-50 h-[60px] ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-white">
                        <li tabIndex={0}>
                            <Link to="/" className="justify-between">
                                Home
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                            </Link>
                        </li>
                        <li tabIndex={1}>
                            <Link to='/doctor' className="justify-between">
                                Specialties
                            </Link>
                        </li>
                        <li tabIndex={2}>
                            <Link to='/blog' className="justify-between">
                                Blog
                            </Link>
                        </li>

                    </ul>
                </div>
                <a className=""><img src={Logo} alt="logo" className='w-1/2' /></a>
            </div>
            <div className="navbar-center hidden lg:flex z-50">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <Link to="/" className="justify-between">
                            Home
                            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                        </Link>
                    </li>
                    <li tabIndex={1}>
                        <Link to='/doctor' className="justify-between">
                            Specialties
                        </Link>
                    </li>
                    <li tabIndex={2}>
                        <Link to='/blog' className="justify-between">
                            Blog
                        </Link>
                    </li>

                    
                </ul>
            </div>
          
        </div>
    );
};