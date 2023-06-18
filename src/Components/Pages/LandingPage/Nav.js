import React from 'react'
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="relative container mx-auto p-6 ">
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-base font-semibold lg:font-bold lg:text-3xl">
          <span className=" text-orange">Salary</span>
          <span className=" text-blue"> PayDay</span>{" "}
        </h1>
        <h4 className="text-ash text-xs">Get paid when you need it</h4>
      </div>
      <div className="flex flex-row gap-5 ">
        <ul className="hidden md:flex space-x-12 content-center items-center  text-ash font-normal text-sm">
          <Link to="/">
            <li className="hover:text-orange text-orange">Home</li>
          </Link>
          <li className=" hover:text-orange">Solutions</li>
          <li className="hover:text-orange">About</li>
          <li className="hover:text-orange">Contact</li>
        </ul>
        <Link to="/signIn">
          <button className="hidden md:block p-3 px-6 pt-2 w-36 text-white bg-orange rounded-full baseline hover:bg-blue space-x-6">
            Login
          </button>
        </Link>
      </div>
    </div>
  </nav>
  )
}
