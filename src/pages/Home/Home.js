import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import useDocumentTitle from '../../useDocumentTitle';
import ServeHome from './ServeHome';


const Home = () => {
   useDocumentTitle("Wild Photography")
   return (
      <div>
         {/* <Temp></Temp> */}
         <Carousel></Carousel>
         <ServeHome></ServeHome>
      </div>
   );
};

export default Home;