import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Navbar.css';
const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken');
      navigate('/login');
    };
    
  return (
    <div className=''>
       <div class="md:w-[80vw] md:rounded-full md:absolute md:top-[6%] md:left-[10%] navbar w-screen text-black bg-slate-100  mx-auto z-50 h-[60px]">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">
      <img src='https://risingtheme.com/html/demo-partsix/partsix/assets/img/logo/nav-log.webp'></img>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/speciality">Speacilities</Link></li>
      <li><Link to="/blood">Blood Bank</Link></li>
      <li><Link to="/medicine">Pharmacy</Link></li>
      <li><Link to="/news">Blogs</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
  <Link className='mr-20 font-bold' to="/dashboard">Dashboard</Link>
  {
    user ? 
    <button className="btn btn-primary text-white rounded-full"  onClick={logout} >Sign Out</button>
    :
    <Link to="/login" className='btn btn-primary  text-white rounded-full'>Login</Link>
  }
  </div>
</div>
    </div>
  )
}
export default Navbar;
