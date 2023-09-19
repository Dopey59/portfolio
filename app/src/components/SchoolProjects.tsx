import React from "react";
import Image from 'next/image';
import Link from "next/link"
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importer les styles CSS de Font Awesome

import { Slide } from "react-awesome-reveal";


export default function SchoolProjects(){
    return(
        <>
            <main id="school" className="">
                <div className=' title flex justify-center items-center sm:justify-start gap-2'>
                    <a className="text-3xl mx-4">Projets scolaire</a>
                    <FontAwesomeIcon icon={faArrowDown} className="text-orange-600" size="lg" bounce />
                </div>

                {/* Projet Twitter */}           
                <div className="w-full py-12">
                    <Slide>
                    <div className='sm:flex sm:justify-around items-center mx-4 gap-6 '>

                        <div className="flex flex-col gap-6">
                            <img src='./twitter2.png' className='sm:w-auto p-2 bg-blue-400 rounded-md sm:h-auto
                            w-full h-auto '/>
                        </div>
                        <div className='flex flex-col sm:items-start sm:text-left gap-4 py-14'>
                            <h1 className='sm:text-3xl text-xl font-bold '>myTwitter |</h1>
                            <p className='text-xl'>#Projet Epitech</p>
                            <p className=''>
                                Dans ce projet réalisé en groupe de 2 nous devions faire un clone du réseau social Twitter.
                                Lorsque vous arrivez sur la page principale, vous allez être invité a vous connecter mais si
                                vous n'avez pas de compte vous pouvez cliquer sur s'inscrire et créer un compte.
                                <br /><br />

                                Petite note : Si vous voulez ajouter une image a votre profil il faudra copier le lien de l'image depuis le web.

                                Maintenant que vous avez un compte vous pouvez agir normalement sur le site, comme sur le vrai Twitter.
                                <br /><b><br /></b>
                            </p>
                            <p className="font-bold">ps: Le projet ce nomme "Cuiiter", petit clin d'oeil à tous les poulets qui nous regardent!</p>

                            <div className="grid sm:grid-cols-4 items-center grid-cols-1 py-4 w-auto gap-3 sm:p-3">
                                <div className="bg-gray-200 rounded-md p-3">
                                    <p className="sm:text-center">React</p>
                                </div>

                                <div className="bg-gray-200 rounded-md p-3">
                                    <p className="sm:text-center">MySQL</p>
                                </div>

                                <div className="bg-gray-200 rounded-md p-3 ">
                                    <p className="sm:text-center ">TailwindCss</p>
                                </div>
                                <Link className="flex items-center gap-3" href={"https://github.com/Dopey59/My-Twitter"}>
                                    <div className="flex items-center justify-center w-64 bg-blue-500 rounded-md gap-6 text-white
                                        hover:bg-blue-600 transition duration-0 hover:duration-500 p-3">
                                        <p>Visiter sur github</p>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    </div>
                    </Slide>

                    {/* Projet Previously On */}           
                    <Slide>
                    <div className='sm:flex sm:justify-around items-center mx-4 gap-6 '>

                        <div className='flex flex-col sm:items-start sm:text-left gap-4'>
                            <h1 className='sm:text-3xl text-xl font-bold'>Previously On |</h1>
                            <p className='text-xl'>#Projet Epitech</p>
                            <p className=' '>
                                Ceci est le dernier projet réalisé en groupe de 2 qui marque la fin de ma première année à Epitech.
                                Vous y trouverez un site-web entièrement créer à l'aide d'une API "Betaseries" où
                                les series du moment y sont répertoriés. 
                                <br /><br />

                                Lorsque vous vous balader sur le site, vous pourrez y voir les détails de votre série préférée, ainsi
                                que chaque épisode de celle-ci. Vous pouvez également ajouter une série à regarder plus tard sur votre compte Betaseries
                                ou même l'archiver ! 


                                <br /><b><br /></b>
                            </p>

                            <div className="grid sm:grid-cols-4 items-center grid-cols-1 py-4 w-auto gap-3 sm:p-3">
                                <div className="bg-gray-200 rounded-md p-3">
                                    <p className="sm:text-center">Axios</p>
                                </div>

                                <div className="bg-gray-200 rounded-md p-3">
                                    <p className="sm:text-center">React</p>
                                </div>

                                <div className="bg-gray-200 rounded-md p-3 ">
                                    <p className="sm:text-center ">TailwindCss</p>
                                </div>
                                <Link className="flex items-center gap-3" href={"https://github.com/Dopey59/Previously-On/"}>
                                    <div className="flex items-center justify-center w-64 bg-red-500 rounded-md gap-6 text-white
                                        hover:bg-blue-600 transition duration-0 hover:duration-500 p-3">
                                        <p>Visiter sur github</p>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className="flex flex-col gap-6 py-14">
                            <img src='./prevHome.png' className='sm:w-auto p-2 bg-red-400 rounded-md sm:h-auto
                            w-full h-auto '/>
                        </div>
                    </div>     
                    </Slide>

                     {/* Projet Game N Tech */}           
                     <Slide>
                    <div className='sm:flex sm:justify-around items-center mx-4 gap-6'>

                        <div className="flex flex-col gap-6">
                            <img src='./Games.png' className='sm:w-auto p-2 bg-orange-500 rounded-md sm:h-auto
                            w-full h-auto '/>
                        </div>
                        <div className='flex flex-col sm:items-start sm:text-left gap-4 py-12'>
                            <h1 className='sm:text-3xl text-xl font-bold '>Game N Tech |</h1>
                            <h3 className='text-xl'>#Projet Personnel</h3>
                            <p className=' '>
                                Fier de vous présenter mon premier projet personnel, ce site-web à pour but
                                de proposer et rediriger les addicts du gaming vers les pionniers du jeux-vidéos, mais aussi du monde de la tech.
                            </p>
                            
                            <h1 className="text-xl font-bold">Pourquoi ?</h1>

                            <p>Nous sommes nombreux à vouloir dénicher les meilleurs offres pour faire le setup de ses rêves. 
                               Ici, vous n'aurez plus à chercher bien loin puisque tous les meilleurs site de gaming pour vos jeux, matériels..
                               sont répertoriés en un seul clic ! 
                            </p>


                                                

                            <div className="grid sm:grid-cols-4 items-center grid-cols-1 py-4 w-auto gap-3 sm:p-3">
                                <div className="bg-gray-200 rounded-md p-3">
                                    <p className="sm:text-center">React</p>
                                </div>

                                <div className="bg-gray-200 rounded-md p-3">
                                    <p className="sm:text-center">Javascript</p>
                                </div>

                                <div className="bg-gray-200 rounded-md p-3 ">
                                    <p className="sm:text-center ">TailwindCss</p>
                                </div>
                                <Link className="flex items-center gap-3" href={"https://github.com/Dopey59/Game-N-Tech/tree/main"}>
                                    <div className="flex items-center justify-center w-64 bg-orange-500 rounded-md gap-6 text-white
                                        hover:bg-blue-600 transition duration-0 hover:duration-500 p-3">
                                        <p>Visiter sur github</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>     
                    </Slide>
                </div>        
            </main>
        
        </>
    )

}