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
            <div className="mt-3 space-x-2 flex justify-center">
            <a className="inline-flex justify-center items-center w-10 h-10 text-center white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition  hover:text-gray-200 hover:bg-gray-800" href="https://www.linkedin.com/in/william-penet/">
            <svg fill="currentColor" className="w-3.5 h-3.5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
            </a>
            <a className="inline-flex justify-center items-center w-10 h-10 text-center white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition  hover:text-gray-200 hover:bg-gray-800" href="https://github.com/Dopey59?tab=repositories">
              <svg className="w-3.5 h-3.5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a className="inline-flex justify-center items-center w-10 h-10 text-center white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition  hover:text-gray-200 hover:bg-gray-800" href="#">
            <svg fill="currentColor" className="w-3.5 h-3.5 sm:w-6 sm:h-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path>
            </svg>
            </a>
          </div>
          </div>
  </div>
    </footer>
  )
}