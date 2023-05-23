import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5" id="banner">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">



              <div className="flex items-center">


                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  {showBlog && (
                    <Button onClick={() => router.push("/avisos")}>Noticias</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        router.push("/acerca")
                      }
                    >
                      Acerca
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1" id="slide1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Inicio
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        id="banner"
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll} id="menu">Avisos</Button>
            <Button onClick={handleAboutScroll} id="menu">Nosotros</Button>
            {showBlog && (
              <Button id="menu" onClick={() => router.push("/avisos")}>Noticias</Button>
            )}
            {showResume && (
              <Button
                id="menu"
                onClick={() => router.push("/acerca")}
                classes="first:ml-1"
              >
                Acerca
              </Button>
            )}
            
            
          </div>
        ) : (
          <div className="flex" id="slide1">
            <Button id="menu" onClick={() => router.push("/")}>Inicio</Button>



          </div>
        )}
      </div>
    </>
  );
};

export default Header;
