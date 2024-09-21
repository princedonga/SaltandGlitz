// Preloader.js
import Aos from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Preloader = () => {
  useEffect(() => {
    Aos.init();
}, []);
  return (
    <div className='' >
        <img data-aos="fade-down" data-aos-duration="3000" className='d-block mx-auto m' src='https://lh4.googleusercontent.com/proxy/ReEsB2qIN_qybP9R5TmMNxVrRzfs1RIfmv7ai6LOXE3elkI7_Vmmm_8oyVHcZMMgb5c2zKKeZt966TuSSBLuiZ0sYZyI5zw' alt='loader'></img>
      <h2 data-aos="fade-left" data-aos-duration="3000" className='text-center text1'>SaltandGlitz</h2>
     
    </div>
  );
};

export default Preloader;
