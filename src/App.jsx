import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Offer from "./components/Offer";
import SocialMediaOffer from "./components/SocialMediaOffer";
import Appointment from "./components/Appointment";
import CreativeProjects from "./components/CreativeProjects";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Footer from "./components/footer";
import WhatsApp from "./common/WhatsApp";
import Clients from "./components/Clients";

function App() {
  return (
    <>
      <Header />

      <main>
        <WhatsApp />
        <HeroSection />

        <Features />

        <section className="container mx-auto mb-8 lg:mb-12" id="offers_section">
          <div className="flex items-center justify-between mb-4 2xl:mb-8">
            <span className="text-xl 2xl:text-3xl font-medium">
              {/* Aapke Sapno ko Pura Karne ka Rasta */}
              Apne Sapno ko Pura Karne ka ek hi Rasta
            </span>
            <span className="h-1 w-3/5 2xl:w-3/6 bg-secondary block"></span>
          </div>

          <Offer />
          <SocialMediaOffer />
          <Appointment />
        </section>

        <section className="container mx-auto mb-10 lg:mb-12">
          <div className="flex items-center justify-between mb-8">
            <span className="h-1 w-1/4 bg-secondary block"></span>
            <h2 className="text-xl lg:text-3xl 2xl:text-4xl text-primary font-semibold text-center py-0">
              HAMARE CREATIVE PROJECTS
            </h2>
            <span className="h-1 w-1/4 bg-secondary block"></span>
          </div>

          <CreativeProjects />
        </section>

        <section className="container mx-auto mb-10 lg:mb-12">
          <div className="flex items-center justify-between mb-8">
            <span className="h-1 w-1/4 bg-secondary block"></span>
            <h2 className="text-xl lg:text-3xl 2xl:text-4xl text-primary font-semibold text-center py-0">
              CLIENTS
            </h2>
            <span className="h-1 w-1/4 bg-secondary block"></span>
          </div>

          <Clients />
        </section>

        <section className="container mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mb-10 lg:mb-12">
          <h2 className="text-xl lg:text-3xl 2xl:text-4xl text-primary text-center font-semibold mb-4 2xl:mb-8">
            Frequently Asked Questions
          </h2>

          <Faqs />
        </section>

        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;
