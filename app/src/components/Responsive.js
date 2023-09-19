import React from "react";
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

    export default function ResponsiveCarousel() {
      const { responsive } = items;
      
      return (
        <main id="pro" className="overflow-x-hidden w-screen">
          <div className="title flex items-center gap-3 justify-center sm:justify-start mx-4">
            <h1 className="text-3xl">Expériences Pro & Formations</h1>
            <FontAwesomeIcon icon={faArrowDown} className="text-orange-600" size="lg" bounce />

          </div>
          <br></br>
          <div>
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              dynamicHeight={false}
              showIndicators={false}
              showStatus={false}
              className="bg-gradient-to-r from-black to-slate-900 text-white"
            >
              {responsive.map((item) => (
                <div className="p-8" key={item.id}>
                  
                  <div className="p-12 mx-auto flex flex-col text-center items-center justify-center">
                    <h2 className="font-bold text-3xl ">{item.title}</h2>
                    <h2 className="text-lg">{item.date}</h2>

                    <br></br>
                    <div>
                      <p className="text-lg font-bold sm:text-xl">{item.text}</p>
                      <br></br><br></br>
                      <div className="mx-auto text-center">
                        <p id="Description" className="text-sm  sm:text-xl">{item.Description}</p>
                      </div>
                      <br></br><br></br>
                      <p className="text-sm sm:text-xl font-bold">{item.Compétences}</p>
                    </div>


                  </div>
                </div>
              ))}
            </Carousel>
          </div>

        </main>
      );
    }