import React from 'react';
import { Routes , Route} from "react-router-dom";


import Dashboard from './component/layout/Dashboard';
import UserRegistration from './component/user/UserRegistration';
import Request from './component/bloodbank/Request';
import Navbar from './component/layout/Navbar';
import UserLogin from './component/user/UserLogin'; 
import UserDashboard from './component/user/UserDashboard';
// import RequestClass from './component/bloodbank/RequestClass';
import Donate from './component/layout/Donate';
import Handelrequest from './component/bloodbank/Handelrequest';
import Search from './component/bloodbank/Search';
import UpdateHealth from './component/bloodbank/UpdateHealth';
import UpdateStock from './component/bloodbank/UpdateStock';
import EmployeeLogin from './component/employee/EmployeeLogin';
import EmployeeRegistration from './component/employee/EmployeeRegistration';
import EmployeeDashboard from './component/employee/EmployeeDashboard';
import Aboutus from './component/layout/Aboutus';
import Giveblood from './component/layout/Giveblood';
// import SearchClass from './component/bloodbank/SearchClass';

function App(){
  const token = localStorage.getItem('token');
  return(
    <div className='App'>
        <Navbar />
      
      <Routes>
     
      <Route exact path='/home' element={<Dashboard/>}/>
      <Route exact path='/donate' element={<Donate/>} />
      <Route exact path ="/login/usr" element={<UserLogin/>} />
      <Route exact path='/login/emp' element={<EmployeeLogin/>}/>
      <Route exact path='/reg/usr' element={<UserRegistration />} />
      <Route exact path='/reg/emp' element={<EmployeeRegistration/>}/>
      <Route exact path ='/login/usr/dashboard' element={<UserDashboard/>} />
      <Route exact path='/login/emp/dashboard' element={<EmployeeDashboard/>}/>
      <Route exact path='/login/emp/ub' element={<UpdateStock/>}/>
      <Route exact path='/login/emp/uh' element={<UpdateHealth/>}/>
      <Route exact path='/home/search/blood' element={<Search/>}/>
      <Route exact path='/login/emp/hr' element={<Handelrequest/>}/>
      {/* <Route exact path='/request' element={<RequestClass/>}/> */}
      {/* <Route exact path='/sclass' element={<SearchClass/>}/> */}
                <Route exact path='/request' element={<Request/>}/>
        <Route exact path='/aboutus' element={<Aboutus/>}/>
        <Route exact path='/giveblood' element={<Giveblood/>}/>

       </Routes>
       </div>

  );
}
export default App;






