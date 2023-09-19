import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faDownload, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-black to-slate-900 ">
      <div className='sm:flex sm:justify-between  text-center text-md mx-auto sm:py-36 py-20 sm:text-xl  '>
        <div className='text-white flex flex-col w-screen mx-auto '>
          <div className='flex justify-center'>
            <Image className="rounded-full" src="/william.jpg" alt="Portrait portfolio image profil w-1/2" width={300} height={300}></Image>
          </div>
          <div className='sm:flex flex-col gap-3 py-6'>
            <h1 className=''>Disponibilité : Dès maintenant <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#3067d5' }} fade size="xl" /></h1>
            <p className=''>&quot;Un Framework pour les gouverner tous.&quot;</p>

          </div>
        </div>

        <div className='text-white sm:flex items-center mx-auto ml-4 mt-16 text-md sm:text-xl
          overflow-x-hidden'>
            <div className=' gap-4 w-full text-left mx-auto flex flex-col'>
              <h1 className='sm:text-xl flex text-lg text-orange-600'>Développeur web & Application mobile</h1>
              <h2 className='text-md text-left text-3xl sm:text-3xl font-semibold'>Hello, ma spécialité ? Le design & SEO</h2>
              <p className='w-4/5'>Ma mission est de rendre une expérience unique et fluide aux utilisateurs ainsi qu'une compatibilité
                web et mobile au top pour vos projets.
              </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;