import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';
import Appoimant from './pages/Appoimant';
import HouseRenovation from './pages/HouseRenovation';
import HouseConstraction from './pages/HouseConstraction';
import BuildingConstraction from './pages/BuildingConstraction';
import Desing from './pages/Desing';
import About from './pages/About';
import Completed from './pages/Completed';
import Ongoing from './pages/Ongoing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import SeconHeader from './components/SeconHeader';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import MainLayout from './Admin/pages/MainLayout';
import Contacts from './Admin/pages/Contacts';
import Coustermer from './Admin/pages/Coustermer';


function Layout({ children }) {
  const location = useLocation();
  const shouldHideHeaderAndFooter = location.pathname.startsWith('/admin');

  return (
    <>
      {!shouldHideHeaderAndFooter && <SeconHeader />}
      {children}
      {!shouldHideHeaderAndFooter && <Footer />}
    </>
  );
}

function App() {
  

  return (
   <>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Estimate' element={<Estimate />} />
                <Route path='/Appointment' element={<Appoimant />} />
                <Route path='/Renovation' element={<HouseRenovation />} />
                <Route path='/House' element={<HouseConstraction />} />
                <Route path='/Building' element={<BuildingConstraction />} />
                <Route path='/Design' element={<Desing />} />
                <Route path='/Completed' element={<Completed />} />
                <Route path='/Ongoing' element={<Ongoing />} />
                <Route path='/sign-in' element={<Signin />} />
                <Route path='/sign-up' element={<Signup />} />
                <Route path='/admin/MainLayout' element={<MainLayout />} />
                
                
                <Route path='/admin/contacts' element={<Contacts />} />
                <Route path='/admin/Coustermer' element={<Coustermer />} />
                <Route element={<PrivateRoute />}>
                  <Route path='/profile' element={<Profile />} />
                </Route>
              </Routes>
            </Layout>
          </BrowserRouter>
          </> 
  );
}

export default App;
