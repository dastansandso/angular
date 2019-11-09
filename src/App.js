import React from 'react';
import Highlight from './cv/outline';
import Mainpane from './cv/mainarea';
import './App.css';
import { Slide } from 'react-slideshow-image';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 
  const slideImages = [
    '../portfolio/banner2.jpg',
    '../portfolio/banner3.jpg',
    '../portfolio/banner.jpg',
  ];
  const altImagetext='Dhiraj Patil';


  const contactinfo =[{
    username : 'Dhiraj Patil',
    role:'Front-End Developer',
    emailId:'patil356@gmail.com',
    contactnumber: '+919975666469',
    Address:'Navi Mumbai',

  }];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  
  const keypoints = [
          { myskills:[
              {
                Wordpress:85,
                HTML5:94,
                CSS3:92,
                jQuery:85,
                Ionic:70,
                Angular:60,
                React:60,
              }

          ],
            topSkills:'HTML5,CSS3,Ionic3,Ionic3,Angular4, React,Jquery,Javascript',
            topFramewroks:'Wordpress,Joomla,Ionic',            
          },
  ]; 

  return (
    <div className="">
    <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img src={slideImages[0]} className="w-100" alt={altImagetext}/>
          </div>
          
          <div className="each-slide">
          <img src={slideImages[1]} className="w-100"  alt={altImagetext}/>
          </div>
          <div className="each-slide">
          <img src={slideImages[2]} className="w-100"  alt={altImagetext}/>
          </div>
        </Slide> 
      </div>
      
    <div className="container py-5">
      <div className="row d-flex justify-content-betweeen -align-items-start ">
      <div className="col-md-12">
      <Highlight aboutinfo={contactinfo}  skellset={keypoints}></Highlight>
      </div>
      <div className="col-md-12">
        <Mainpane/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
