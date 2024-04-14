import React from 'react'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';  
import DoctorPage from './DoctorPage'; 
import PatientPage from './PatientPage'; 
import Navbar from './Navbar';
import Footer from './Footer'; 


const App = () => {
  return ( 
    <> 
      <Navbar/>
      <Routes>
        <Route path="/AdminPage" element={<AdminPage />} /> 
        <Route path="/DoctorPage" element={<DoctorPage />} /> 
        <Route path="/PatientPage" element={<PatientPage />} />
      </Routes>  
      <Footer/>
    </>
  );
};

export default App;
