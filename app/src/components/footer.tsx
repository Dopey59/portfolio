import Image from 'next/image';
import Link from 'next/link';
// import { faGithub, faLinkedin  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
                  Github</a>
              </Link>

              <Link href={"https://www.linkedin.com/in/william-penet/"} legacyBehavior>
                <a className='rounded text-white hover:bg-white hover:text-black hover:p-2 py-2 transition duration-0 hover:duration-700'>
                  Linkedin</a>
              </Link>
            </div>
          </div>
        </div>
    </footer>
  )
}