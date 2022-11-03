import React from 'react'
import Banner  from '../banner/Banner'
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
import { Supporter } from '../supporters/Supporter'
import { Class } from '../class/Class'
import { Count } from '../countup/Count'
import { LiveClass } from '../liveclass/LiveClass'
import { Transform } from '../transform/Transform'
import { Use } from '../use/Use'
import Doctor from '../Book Our Doctors/Doctor'
import Services from '../What are u looking fr/Services'
import AvailableFeatures from '../AvailableFeatures/AvailableFeatures'
import NewsLetter from '../newsletter/NewsLetter'
import News from '../news/News'
import Ambulance from '../AmbulanceService/Ambulance'
import Faq from '../Faq/Faq'
import Reviewda from '../Review/Reviewda'
import Specialty  from '../specialities/Speciality'
import { NavigationBar } from '../NavigationBar'

export const Home = () => {
  return (
    <div>
     
        <Banner></Banner>
        <br></br>
        <br></br>
        <br></br>
        <Services></Services>
        <br></br>
        <br></br>
        <br></br>
        <Specialty></Specialty>
        <br></br>
        <br></br>
        <br></br>
        <Use></Use>
        <br></br>
        <br></br>
        <br></br>
       <Doctor></Doctor>
       <br></br>
        <br></br>
        <br></br>
        <AvailableFeatures></AvailableFeatures>
        
        <Ambulance></Ambulance>
        <NewsLetter></NewsLetter>
        <News></News>
        <br></br>
        <br></br>
        <br></br>
        <Faq></Faq>
        <br></br>
        <br></br>
        <br></br>
        <Reviewda></Reviewda>
    </div>
  )
}
