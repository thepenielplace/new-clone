import React from 'react';
//import Friction from './components/Friction';
//import Aspire from './components/aspire';
//import Header from './components/header';
//import Heropage from './components/Hero';
//import Slider from './components/slider';
//import Home from './components/Routers/Home'
//import About from './components/Routers/About'
//import Contact from './components/Routers/Contact'
//import Pricing from './components/Routers/Pricing'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Card from './components/card'
import Head from './components/Tynker/T-header'
import Start from './components/Tynker/start'
import ProHead from './components/Project/pro-head';
import Facilitator from './components/Project/fac'
import ProCard from './components/Project/pro-card'
import Parent from './components/Tynker/third'
import Mobile from './components/Tynker/fourth'
import ProAbout from './components/Project/pro-about'
import Kids from './components/Tynker/fifth'
import Benefit from './components/Tynker/sixth'
import Trusted from './components/Tynker/seventh'
import Join from './components/Tynker/map'
import Foot from './components/Tynker/foot'
import Footer from './components/Tynker/footer2'





function App(){
  return (
    

      <>
      <div>

   {/*   <Router>
<ProHead />
        <Routes>
          
          <Route path='/about' element={<ProAbout/>}/>
        </Routes>
      </Router>*/}

     {/*<ProHead />
      <Facilitator />
      <ProCard />*/}

     <Head />
      <Start />
      <Parent />
      <Mobile />
      <Kids />
      <Benefit />
      <Trusted />
      <Join />
     <Footer />
     {/*<Foot />
     
     
     {/* <Card />

      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
      </Router> */}
      

    {/*  <Slider />

      <Heropage />

      < Aspire />

      < Friction /> */}
     

    </div>

    </>
  
  );
}

export default App;

