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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className=''>
              <h2 className='text-center text1'>SaltandGlitz</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Preloader;
