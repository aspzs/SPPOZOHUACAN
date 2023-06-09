import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from 'next/image';


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Sistema de Agua Potable de San Pedro Pozohuacan</title>
      </Head>


      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-9" id="titulo">
            <h1
              ref={textOne}
              className="text-xl tablet:text-2xl laptop:text-3xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h2
              id="texto"
              ref={textTwo}
              className="text-3xl tablet:text-3xl laptop:text-3xl laptopl:text-6xl tablet:p-2 text-bold laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h2>
            <img id="imagenTitulo" src="https://raw.githubusercontent.com/aspzs/SPPOZOHUACAN/main/sanpedro.jpeg" alt="Girl in a jacket" width="auto" height="auto"></img>
          </div>

        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-center font-semibold  text-blue-900">Avisos</h1>
          <div className="mt-2 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-4 gap-4" id="avisosDivs">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-center text-2xl font-semibold text-blue-900">Formas de contacto</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
                face = {service.face}
                mailContacto={service.mailContacto}
                whatsApp={service.whatsApp}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
 
        <div className="laptop:mt-0 p-2 laptop:p-0" ref={aboutRef}>
        <h1 className="tablet:m-10 text-center text-2xl font-semibold text-blue-900">Nosotros</h1>
          <p className="tablet:m-10  laptop:text-2xl opacity-80" style={{ whiteSpace: "pre-line" }}>
            {data.aboutpara}
          </p>
        </div>
        <div className="tablet:m-10 text-right text-3xl font-semibold text-blue-900">
        <Socials className="laptop:mt-5" />
        </div>
      </div>
    </div>
  );
}
