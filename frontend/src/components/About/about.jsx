import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto container">
      <main className="flex-1">
        <section className="w-full lg:py-32">
          <div className="container px-4 md:px-6 pt-20 lg:pt-0 scale-90">
            <div className="grid gap-6 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl py-5 font-bold tracking-tighter sm:text-5xl xl:text-6xl text-gray-900">
                    Don't buy , rent!
                  </h1>
                  <p className="max-w-[600px] pb-4 text-gray-700 md:text-xl">
                    Machinery Rentals Hub connects construction vehicle owners with
                    renters, simplifying the process and ensuring easy access to
                    quality equipment for your projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    to="/vehicles"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-300 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <video
                autoPlay
                muted
                loop
                width="650"
                height="550"
                alt="About us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              >
                <source src="https://media.istockphoto.com/id/1790979527/video/back-view-of-hispanic-female-project-manager-and-caucasian-male-civil-engineer-walking-and.mp4?s=mp4-640x640-is&k=20&c=rfrW0Ws5Hqo-aEBNjon_BLQjp0orEMZOkEDGsgjFicM=" />
              </video>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 animate-fadeIn">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Our Mission
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed pt-5 lg:text-base/relaxed xl:text-xl/relaxed">
                  At Machinery Rentals Hub, we believe that everyone deserves access to the
                  tools they need to succeed, especially in the bustling world
                  of construction. Our mission is to connect construction
                  vehicle owners with those who might not have the resources to
                  buy their own vehicles. Whether you're a startup with limited
                  needs or a growing company looking to save costs, we provide a
                  platform where you can easily rent construction vehicles for a
                  day or more. Our goal is to simplify the renting process,
                  ensuring that no project is held back due to a lack of
                  equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fadeIn">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Our Vision
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed py-8 lg:text-base/relaxed xl:text-xl/relaxed">
                 We expect the Machinery Rentals Hub platform to take off strongly,
                 especially in Egypt, where the demand for reliable equipment rental solutions is increasing.
                 We are just at the beginning, and the future holds a lot!
                
                </p>
              </div>

            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 animate-fadeIn">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                The Creator of Machinery Rentals Hub
                </h2>
               
              </div>
         <div className="grid grid-cols-1 gap-6 w-full max-w-6xl scale-95">
             <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-transform transform hover:scale-105 w-full">
              <div className="flex flex-col items-center text-center">
              <img 
                 src="/public/my-photo.jpg" 
                 alt=" " 
                 className="w-32 h-32 rounded-full object-cover shadow-md"
               />
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                Mohamed Gamal
              </h3>
             <p className="text-gray-700 text-lg">Founder and Lead Designer</p>
          </div>
             <p className="mt-6 text-gray-700 text-lg">
            Mohamed is the idea behind and lead designer of Machinery Rentals Hub.
              He started the project with a clear vision to make heavy equipment rental easier and safer, 
             with a focus on providing a seamless user experience. With his passion for design and innovation,
              he helped build a platform that brings together equipment owners and renters in a smart and efficient way.
             </p>
             </div>
             </div>
           </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
