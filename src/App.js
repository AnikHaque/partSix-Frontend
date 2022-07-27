import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/home/Home';
import AddTools from './components/addtools/AddTools';
import { Details } from './components/productdetails/Details';

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
function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
   <Routes>
   <Route path="/" element={<Home></Home>} />
   <Route path="/addtools" element={<AddTools></AddTools>} />
   <Route path="/update/:id" element={<Update></Update>} />
   <Route path="/parts/:id" element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        } />
        <Route path="dashboard" element={<Dashboard />} >
        <Route index element={<About/>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="allorders" element={<AllOrders/>}></Route>
          <Route path="myorders" element={<MyOrders/>}></Route>
          <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
         
        </Route>

        <Route path="test" element={<Home></Home>}>
          <Route path="search" element={<AddTools></AddTools>} />
          <Route path="list" element={<Update></Update>} />
          <Route path="add" element={<AddTools></AddTools>} />
          <Route path=":id" element={<AllOrders></AllOrders>} />
        </Route>
   <Route path="/login" element={<Login></Login>} />
   <Route path="/register" element={<SignUp></SignUp>} />
   </Routes>
    </div>
  );
}

export default App;
