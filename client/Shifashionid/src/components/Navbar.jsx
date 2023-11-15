import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";

export function StickyNavbar({ openCloseModal }) {
  return (
    <>
      <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center text-gray-900 md:container md:mx-auto">
          <Link
            to="/"
            className="mr-4 block cursor-pointer font-sans text-base font-medium leading-relaxed text-inherit antialiased"
          >
            <img src="logo.png" alt="Shifashionid" width={"100px"}/>
          </Link>
          <div className="flex flex-grow justify-center">
              <p>
                Welcome to Our Best Fashion
              </p>
          </div>
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased middle none center items-center justify-center rounded-lg uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <Link to={'/'} className="opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
            </li>
          </ul>
          <Link
            to={'/formLogin'}
            className="shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
            data-ripple-light="true"
          >
            <FaRegUser />
          </Link>
          <a
            href="" onClick={(event) => {
                event.preventDefault()
                openCloseModal()
            }}
            className="ml-5 shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="Button"
            data-ripple-light="true"
          >
            <SlHandbag />
          </a>
        </div>
        <div
          className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
          data-collapse="sticky-navar"
        ></div>
      </nav>
      <div className="mx-auto max-w-screen py-10 md:container md:mx-auto">
        <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://assets.hermes.com/is/image/hermesedito/BIRKIN_HERO?wid=1200"
          />
        </div>
        <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased text-center uppercase">
          Choose your favorite bag
        </h2>
      </div>
    </>
  );
}
