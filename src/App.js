import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/home/Home';



import SignUp from './components/login/SignUp';
import RequireAuth from './components/login/RequireAuth';
import { About } from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';
import MyOrders from './components/dashboard/myorders/MyOrders';
import AllOrders from './components/dashboard/allorders/AllOrders';
import { AllUsers } from './components/dashboard/allusers/AllUsers';
import { Update } from './components/dashboard/update/Update';
import { Tools } from './components/tools/Tools';
import Test from './components/Test';
import Login from './components/login/Login';
import { DashboardHome } from './components/dashboard/DashboardHome';
import { Shop } from './components/shop/Shop';
import { Footer } from './components/footer/Footer';
import { Blogs } from './components/blogs/Blogs';
import { BlogPage } from './components/blogpage/Blogpage';
import AddCourses from './components/addtools/AddCourses';
import { Payment } from './components/dashboard/Payment';
import Details from './components/details/Details';
import Appointment from '../src/components/appointment/Appointment';
import MyAppointment from './components/appointment/MyAppointment';
import AddNews from './components/addnews/AddNews';
import NewsDetails from './components/newsdetails/NewsDetails';
import AddAmbulance from './components/addambulance/AddAmbulance';
import AddReview from './components/addreview/AddReview';
import Urology from './components/urology/Urology';
import Orthopedic from './components/orthopedic/Orthopedic';
import BloodBank from './components/BloodBank/BloodBank';
import BloodDoner from './components/BloodDoner/BloodDoner';
import BloodDonerList from './components/BloodDonerList/BloodDonerList';
import { Blood } from './components/Blood';
import { Pay } from './components/dashboard/Pay';
import AddMedicine from './components/addmedicine/AddMedicine';
import Medicine from './components/medicine/Medicine';
import MDetails from './components/medicine/MDetails';
import  UroDetails  from './components/urology/UroDetails';
import OrthoDetails from './components/orthopedic/OrthoDetails';
import { NavigationBar } from './components/NavigationBar';
import MyMedicine from './components/dashboard/mymedicine/MyMedicine';
import AllMedicineOrder from './components/dashboard/allmedicineorders/AllMedicineOrder';
import { MedPay } from './components/medpayment/MedPay';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
   <Routes>
   <Route path="/" element={<Home></Home>} />
   <Route path="/addcourses" element={<AddCourses></AddCourses>} />
   <Route path="/shop" element={<Shop></Shop>} />
   <Route path="/medicine" element={<Medicine></Medicine>} />
   <Route path="/blood" element={<Blood></Blood>} />
   <Route path="/about" element={<About></About>} />
   <Route path="/bloodbank" element={<BloodBank></BloodBank>} />
   <Route path="/email" element={<Contact></Contact>} />
   <Route path="/doner" element={<BloodDoner></BloodDoner>} />
   <Route path="/donerlist" element={<BloodDonerList></BloodDonerList>} />
   <Route path="/uro" element={<Urology></Urology>} />
   <Route path="/ortho" element={<Orthopedic></Orthopedic>} />
   <Route path="/blogs" element={<BlogPage></BlogPage>} />
   <Route path="/appointment" element={<Appointment></Appointment>} />
   <Route path="/update/:id" element={<Update></Update>} />
   <Route path="/medicine/:id" element={<MDetails></MDetails>} />
   <Route path="/uro/:id" element={<UroDetails></UroDetails>} />
   <Route path="/ortho/:id" element={<OrthoDetails></OrthoDetails>} />
   <Route path="/websitedoctors/:id" element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        } />
   <Route path="/parts/:id" element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        } />
   <Route path="/news/:id" element={
          <RequireAuth>
            <NewsDetails></NewsDetails>
          </RequireAuth>
        } />
        <Route path="dashboard" element={<Dashboard />} >
        <Route index element={<DashboardHome></DashboardHome>}></Route>
          <Route path="addmedicine" element={<AddMedicine></AddMedicine>}></Route>
          <Route path="addnews" element={<AddNews></AddNews>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="addambulance" element={<AddAmbulance></AddAmbulance>}></Route>
          <Route path="allorders" element={<AllOrders/>}></Route>
          <Route path="myorders" element={<MyOrders/>}></Route>
          <Route path="myappointment" element={<MyAppointment></MyAppointment>}></Route>
          <Route path="mymedicine" element={<MyMedicine></MyMedicine>}></Route>
          <Route path="payment/:id" element={<Pay></Pay>}></Route>
          <Route path="pay/:id" element={<MedPay></MedPay>}></Route>
          <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
          <Route path="allmedicine" element={<AllMedicineOrder></AllMedicineOrder>}></Route>
         
        </Route>

        <Route path="test" element={<Home></Home>}>
          <Route path="search" element={<AddCourses></AddCourses>} />
          <Route path="list" element={<Update></Update>} />
          <Route path="add" element={<AddCourses></AddCourses>} />
          <Route path=":id" element={<AllOrders></AllOrders>} />
        </Route>
   <Route path="/login" element={<Login></Login>} />
   <Route path="/signUp" element={<SignUp></SignUp>} />
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
