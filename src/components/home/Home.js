import React from 'react'
import { Banner } from '../banner/Banner'
import Navbar from '../navbar/Navbar'
import { Sample } from '../sample/Sample'
import { Tools } from '../tools/Tools'
import { SummerSale } from '../summersale/SummerSale'
import './Home.css'
import { Brands } from '../brands/Brands'
import { Blogs } from '../blogs/Blogs'
import { Footer } from '../footer/Footer'
import { Team } from '../team/Team'
import { BigSale } from '../bigsale/BigSale'
import { About } from '../about/About'
import { Portfolio } from '../portfolio/Portfolio'
import { Works } from '../works/Works'
export const Home = () => {
  return (
    <div className='bg-black' >
        <Banner className='bg-black'></Banner>
     <BigSale className='bg-black'></BigSale>
        <br></br>
        <br></br>
        <br></br>
        <Tools ></Tools>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Works></Works>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <About ></About>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Portfolio></Portfolio>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Blogs></Blogs>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <Brands></Brands>
        <br></br>
        <br></br>
        <br></br> */}
        
        <Footer></Footer>
    </div>
  )
}
