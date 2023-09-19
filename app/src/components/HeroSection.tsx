import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faDownload, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const HeroSection = () => {
  return (
<<<<<<< HEAD
    <section id="home" className="bg-gradient-to-r from-black to-slate-900 ">
      <div className='sm:flex sm:justify-between  text-center text-md mx-auto sm:py-36 py-20 sm:text-xl  '>
        <div className='text-white flex flex-col w-screen mx-auto '>
          <div className='flex justify-center'>
            <Image className="rounded-full" src="/william.jpg" alt="Portrait portfolio image profil w-1/2" width={300} height={300}></Image>
          </div>
          <div className='sm:flex flex-col gap-3 py-6'>
            <h1 className=''>Disponibilité : Dès maintenant <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#3067d5' }} fade size="xl" /></h1>
            <p className=''>&quot;Un Framework pour les gouverner tous.&quot;</p>
=======
    <section id="home" className=" bg-gradient-to-r from-gray-900  to-purple-900">
      <div className='relative sm:flex text-center text-md sm:text-xl items-center justify-around my-10 py-28'>
        <div className=' pb-4 relative text-white'>
          <div className='flex justify-center'>
            <Image className="rounded-full shadow-md shadow-black" src="/william.jpg" alt="Portrait portfolio image profil" width={200} height={200}></Image>
>>>>>>> 8df64bd17f1280711431883e9c0ed96e53d7b410
          </div>
        </div>
<<<<<<< HEAD

        <div className='text-white sm:flex items-center mx-auto ml-4 mt-16 text-md sm:text-xl
          overflow-x-hidden'>
            <div className=' gap-4 w-full text-left mx-auto flex flex-col'>
              <h1 className='sm:text-xl flex text-lg text-orange-600'>Développeur web & Application mobile</h1>
              <h2 className='text-md text-left text-3xl sm:text-3xl font-semibold'>Hello, ma spécialité ? Le design & SEO</h2>
              <p className='w-4/5'>Ma mission est de rendre une expérience unique et fluide aux utilisateurs ainsi qu'une compatibilité
                web et mobile au top pour vos projets.
              </p>
            </div>
=======
        <div className=''>
          <Link href={"https://www.linkedin.com/in/william-penet/"} legacyBehavior>
            <a className='text-xl font-bold hover:text-blue-700 hover:bg-white rounded hover:p-2 transition duration-0 hover:duration-700 text-white hover:text-2xl'>Linked&apos;In</a>
          </Link>
          <div className='py-2 text-white'>
            <p>Anglais : B2</p>
            <p>06.64.93.22.02</p>
            <p>Nord, Lille 59800</p>
            <p>Permis B : Non véhiculé</p>
            <p>penet.william@gmail.com</p>
            <br />
            <Link legacyBehavior href="/cv.pdf">
              <a className=' text-white font-bold rounded hover:bg-white hover:text-black hover:p-2 transition duration-0 hover:duration-700'><FontAwesomeIcon icon={faDownload} size="lg" /> Télécharger le CV</a>
            </Link>
          </div>
>>>>>>> 8df64bd17f1280711431883e9c0ed96e53d7b410
        </div>
      </div>
    </section>
  );
};

export default HeroSection;