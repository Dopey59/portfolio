import React from "react";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importer les styles CSS de Font Awesome
import { Slide, Zoom} from "react-awesome-reveal";



export default function About(){
    return(
        <main id="skills" className="">
            <div className='title items-center gap-3 flex justify-center sm:justify-start mx-4 '>
                <h1 className="text-3xl py-4">Hard Skills </h1>
                <FontAwesomeIcon icon={faArrowDown} className="text-orange-600" size="lg" bounce />
            </div>

            <div className="flex justify-center text-white py-8 w-screen bg-gradient-to-r from-slate-600 to-slate-900  ">
                <div className="grid grid-cols-2 sm:grid-cols-12 lg:grid-cols-6 gap-4 p-8 w-full">
                    <Slide duration={1000}>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Css</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Html</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>TailwindCss</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center ">
                        <h1>React</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>NextJs</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>NodeJs</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>GitHub</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Php</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Symfony</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Javascript</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Laravel</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Scss</h1>
                    </div>

                    </Slide>
                </div>
            </div>
        </main>
    )
}