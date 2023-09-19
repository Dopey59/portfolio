<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';
import { faDownload, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
  return(
    <footer id="contact" className="w-screen h-auto text-white bg-gradient-to-r from-black to-slate-900 p-12 ">
        <div className="footerElements sm:flex items-center justify-around">

          <div className="firstBlock flex flex-col sm:items-start text-center">
            <h1 className="contact text-md sm:text-xl font-semibold py-2 text-orange-600">Contactez-moi</h1>
            <p>06.64.93.22.02</p>
            <p>penet.william@gmail.com</p>
          </div>

          <div className="firstBlock flex flex-col sm:items-start text-center py-6">
            <h1 className="contact text-md sm:text-xl font-semibold py-2 text-orange-600">A propos</h1>
            <p>Anglais B2 - C1</p>
            <p>Lille, France</p>
            <p>Permis B</p>
          </div>

          <div className="firstBlock flex flex-col sm:items-start text-center py-2">
            <h1 className="contact text-md sm:text-xl font-semibold py-2 text-orange-600">Plus</h1>
            <div className='flex justify-center items-center gap-4'>
              <Link legacyBehavior href="/cv.pdf">
                <a className='rounded hover:bg-white hover:text-black hover:p-2 transition duration-0 hover:duration-700'>CV</a>
              </Link>

              <Link href={"https://github.com/Dopey59?tab=repositories"} legacyBehavior>
                <a className='rounded text-white hover:bg-white hover:text-black hover:p-2 py-2 transition duration-0 hover:duration-700'>
                  <FontAwesomeIcon icon={faGithub}  size="lg" /></a>
              </Link>

              <Link href={"https://www.linkedin.com/in/william-penet/"} legacyBehavior>
                <a className='rounded text-white hover:bg-white hover:text-black hover:p-2 py-2 transition duration-0 hover:duration-700'>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
              </Link>
            </div>
          </div>

=======
import React from "react";
import {  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
  return (
    <footer id="footer" className=" overflow-hidden bottom-0 w-full">
        <div className="">
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4b0979" fill-opacity="1" d="M0,64L30,101.3C60,139,120,213,180,213.3C240,213,300,139,360,133.3C420,128,480,192,540,224C600,256,660,256,720,250.7C780,245,840,235,900,208C960,181,1020,139,1080,128C1140,117,1200,139,1260,133.3C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
>>>>>>> 8df64bd17f1280711431883e9c0ed96e53d7b410
        </div>
    </footer>
  )
}