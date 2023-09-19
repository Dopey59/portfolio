import React from "react";
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';

import { Fade } from "react-awesome-reveal";


export default function Alternance() {
  return (
    <>
    
    <main id="alternance" className="overflow-x-hidden">
      <div className='flex items-center gap-3 justify-center sm:justify-start mx-4'>
        <h1 className="text-3xl">L&apos;alternance</h1>
        <FontAwesomeIcon icon={faArrowDown} className="text-orange-600" size="lg" bounce />
      </div>
      <Fade duration={1500}>
      <div className="">
            <div className="mainContainer">

              <div className='sm:flex sm:justify-around justify-center items-center  p-12 '>
                <div>
                    <Image 
                    alt="image temps"
                    src='/time.jpg'
                    className='shrink-0 w-80 h-auto'
                    width={900}
                    height={900}
                    >

                    </Image>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <h1 className='sm:text-3xl text-lg font-bold'>Rythme de lalternance |</h1>
                    <p className='sm:text-2xl text-sm'>Alternance 14 mois.</p>
                    <p className='sm:text-lg text-sm text-center'>L&apos;alternance se déroule avec 3 semaines en entreprise et 1 semaine à l&apos;école.</p>
                </div>
              </div>

              <div className='sm:flex sm:justify-around justify-center items-center p-12'>

                <div className='flex flex-col items-center gap-4'>
                    <h1 className='sm:text-3xl text-lg font-bold'>Front End  |</h1>
                    <p className='sm:text-2xl text-sm text-center'>Développement-web & application mobile.</p>
                    <p className='sm:text-lg text-sm  text-center'>Passioné par le design, je suis en quête perpetuélle d'innovation graphique & d&apos;érgonomie pour les utilisateurs. </p>
                </div>

                <div className="py-6">
                    <Image alt="image dev exemple" 
                      src='/dev.jpg'
                      className='shrink-0 w-80 rounded-full h-auto'
                      width={900}
                      height={900}>
                    </Image>
                </div>
              </div>
            </div>
          </div>
        </Fade>
    </main>
    </>
  );
}