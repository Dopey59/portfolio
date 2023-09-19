import React from "react";
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";


export default function Alternance() {
  return (
<<<<<<< HEAD
    <>
    
    <main id="alternance" className="overflow-x-hidden">
      <div className='flex items-center gap-3 justify-center sm:justify-start mx-4'>
        <h1 className="text-3xl">L&apos;alternance</h1>
        <FontAwesomeIcon icon={faArrowDown} className="text-orange-600" size="lg" bounce />
=======
    <main id="alternance" className="flex flex-col">
      <div className='title flex justify-center sm:justify-start mx-4'>
        <h1 className="font-bold text-2xl">L&apos;alternance <FontAwesomeIcon icon={faArrowDown} size="sm" bounce /></h1>
      </div>
      <div className="py-8">
        <div className="w-1/1 flex justify-center text-left gap-8">
          <p className="text-md sm:text-xl mx-4">Passionné par le développement web et animé par la curiosité,
            <br />je suis à la recherche d&apos;une entreprise qui partage mes valeurs humaines.
            Je souhaite m&apos;investir pleinement dans une alternance qui me permettra
            d&apos;acquérir de nouvelles compétences
            et de les mettre en pratique au sein d&apos;une équipe dynamique.
            <br /><br />
            Mon alternance se déroulera sur une durée de 14 mois,
            accompagnée d&apos;un rythme d&apos;1 semaine à l&apos;école et 3 semaines en entreprise. Le but de ma formation étant d&apos;être full stack, j&apos;avoue avoir un
            goût plus prononcé pour le design et les interfaces graphiques, ce qui pourrait compter comme une spécialité en front.
          </p>
        </div>
>>>>>>> 8df64bd17f1280711431883e9c0ed96e53d7b410
      </div>
      <Fade duration={1500}>
      <div className="">
            <div className="mainContainer">

              <div className='sm:flex sm:justify-around justify-center items-center  p-12 '>
                <div>
                    <img src='./time.jpg' className='shrink-0 w-80 h-auto'/>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <h1 className='sm:text-3xl text-lg font-bold'>Rythme de l'alternance |</h1>
                    <p className='sm:text-2xl text-sm'>Alternance 14 mois.</p>
                    <p className='sm:text-lg text-sm text-center'>L'alternance se déroule avec 3 semaines en entreprise et 1 semaine à l'école.</p>
                </div>
              </div>

              <div className='sm:flex sm:justify-around justify-center items-center p-12'>

                <div className='flex flex-col items-center gap-4'>
                    <h1 className='sm:text-3xl text-lg font-bold'>Front End  |</h1>
                    <p className='sm:text-2xl text-sm text-center'>Développement-web & application mobile.</p>
                    <p className='sm:text-lg text-sm  text-center'>Passioné par le design, je suis en quête perpetuélle d'innovation graphique & d'érgonomie pour les utilisateurs. </p>
                </div>

                <div className="py-6">
                    <img src='./dev.jpg' className='shrink-0 w-80 rounded-full h-auto'/>
                </div>
              </div>

              

            </div>
          </div>
        </Fade>
      {/* </div> */}
    </main>
    </>
  );
}