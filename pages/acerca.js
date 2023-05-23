import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import Head from 'next/head';


const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
        <Header isBlog />
        {mount && (
          <div className="w-full flex flex-col items-center">
            <Head>
              <title>Acerca</title>
            </Head>
            <div
              className={`w-full 
              max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg`}>
              <h1 className="text-3xl font-bold">Acerca de nosotros</h1>
              <img src="https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" className="w-3/2 mt-5 opacity-70"></img>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <h2 className="text-xl mt-5 opacity-50">
              {resume.description2}
              </h2>        
            <div>
            <form className="text-xl mt-5 opacity-50">
              <h1 className="text-3xl font-bold" id="contacto">Contactanos</h1>
              <div className="email block">
                <label htmlFor="frm-email">Email</label>
                <input 
                   id="frm-email"
                   type="email"
                   name="email"
                   autoComplete="email"
                   required/>
              </div>
              <div className="block phone">
                <label htmlFor="frm-phone">Telefono</label>
                <input
                   id="frm-phone"
                   type="text"
                   name="phone"
                   autoComplete="Telefono"
                   required/>
              </div>
              <div className="name block">
                <div>
                  <label htmlFor="frm-first">Nombre</label>
                  <input
                     id="frm-first"
                     type="text"
                     name="first"
                     autoComplete="nombre"
                     required/>
                </div>
                <div>
                  <label hrmlFor="frm-last">Apellido</label>
                  <input
                     id="frm-last"
                     type="text"
                     name="nombre"
                     autoComplete="family-name"
                     required/>
                </div>
              </div>
              <div className="message block">
                <label htmlFor="frm-message">Mensaje</label>
                <textarea id="frm-message" rows="6" name="mensaje"></textarea>
              </div>
              <div className="button block">
                <button type="submit" className="enviar">Enviar</button>
              </div>
              </form>
              <h3 className="w-4/6 text-xl mt-10">
                <p className="mt-10">Nuestras redes sociales</p>
              </h3>
              <div>
                <Socials />
              </div>
            </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Resume;
