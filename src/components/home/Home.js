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
import { Shop } from '../shop/Shop';

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <br></br>
        <br></br>
        <br></br>
       <Shop></Shop>    
    </div>
  )
}
