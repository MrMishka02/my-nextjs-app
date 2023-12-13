"use client";

import { Card } from "../components";
import onlineZoo from "../assets/images/onlinezoo.jpg";
import bookshop from "../assets/images/bookshop.jpg";
import pcfy from "../assets/images/pcfy.jpg";

function projects() {
  return (
    <div className="h-screen bg-gray-200">
      <h1 className="h-10 w-full pt-20 m-auto text-center text-sky-700 text-4xl font-bold">
        My Projects
      </h1>
      <div className="m-auto mt-10 w-[90%] flex justify-evenly">
        <Card
          path={bookshop}
          src={""}
          height={0}
          width={0}
          cardH1="Book Shoop"
          cardText="Online shop to buy book with delivery to user's home.
          Was used DOM API, HTML, CSS, Javascript, Json.
          The project was created at an early stage of learning."
        />
        <Card
          path={onlineZoo}
          src={""}
          height={0}
          width={0}
          cardH1="Online Zoo"
          cardText="Responsive Multipage platform that contains information about animals from various zoos.
          Was used Figma design, PerfectPixel for Google Chrome, HTML, CSS and Javascript.
          The project was created at an early stage of learning."
        />
        <Card
          path={pcfy}
          src={""}
          height={0}
          width={0}
          cardH1="Redberry PCfy (MERN stack)"
          cardText="Responsive multipage platform in which he describes which employee has been given which laptop.
          We should also be able to describe the details of the laptop as well. Built with ReactJS, Tailwind CSS,
          also was used React Redux and Form Validation."
        />
      </div>
    </div>
  );
}

export default projects;
