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
              <img src="https://raw.githubusercontent.com/aspzs/SPPOZOHUACAN/main/sanpedro.jpeg" className="w-3/2 mt-5 opacity-70"></img>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <h2 className="text-xl mt-5 opacity-50">
              {resume.description2}
              </h2>      
              
              <h3 className="w-4/6 text-xl mt-10">
                <p className="mt-10">Nuestras redes sociales</p>
              </h3>

              <div>
                <Socials />
              </div>  

            </div>
          </div>
        )}
    </>
  );
};

export default Resume;
