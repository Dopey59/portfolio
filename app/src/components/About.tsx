import React from "react";
import { faArrowDown, faLightbulb, faPeopleCarry, faBookOpenReader, faUserCheck, faHeart, faGamepad, faPlane, faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Zoom} from "react-awesome-reveal";


export default function About() {
  return (
    <main className="overflow-x-hidden py-4 bg-gradient-to-r from-gray-200 to-slate-200">
      
      <div className="py-8 flex sm:justify-center justify-center">
        <div id="about"  className="grid grid-cols-2 sm:grid-cols-8 gap-6 p-6 ">
        <Zoom>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-4  place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faPeopleCarry} size="sm" /> Travail d'équipe</h1>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faLightbulb} size="sm" /> Créatif</h1>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faUserCheck} size="sm" /> Autonome</h1>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faBookOpenReader} size="sm" /> Curieux</h1>

          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500"><FontAwesomeIcon icon={faGamepad} size="sm" />Jeux vidéos</h1>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faHeart} size="sm" /> Sports</h1>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faSpa} size="sm" /> Méditation</h1>
          <h1 className="bg-black text-white hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer rounded-md p-4 flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faPlane} size="sm" /> Voyages</h1>
        </Zoom>
        </div>
      </div>
    </main>
  )
}