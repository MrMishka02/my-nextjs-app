"use client";

import { Card } from "../components";
import portfolio from "../assets/images/portfolio.jpg";
import onlineZoo from "../assets/images/onlinezoo.jpg";
import bookshop from "../assets/images/bookshop.jpg";
import pcfy from "../assets/images/pcfy.jpg";

function projects() {
  return (
    <div className="h-auto w-full bg-gray-100 pb-20 lg:h-auto lg:pb-20 sm:h-auto sm:pb-20">
      <h1 className="h-10 w-full pt-10 m-auto text-center text-sky-700 text-4xl font-bold">
        Some of My Projects
      </h1>
      <div
        className="m-auto mt-10 w-[90%] flex justify-evenly flex-wrap
        lg:justify-center sm:mt-4 sm:justify-center"
      >
        <Card
          path={portfolio}
          src={""}
          height={0}
          width={0}
          cardH1="Personal Portfolio"
          cardText="My personal portfolio, responsive multipage app built with NextJS and Tailwind CSS."
          cardLink="./"
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
          cardLink="https://pcfy-redberry.vercel.app/"
        />
        <Card
          path={bookshop}
          src={""}
          height={0}
          width={0}
          cardH1="Book Shoop"
          cardText="Online shop to buy book with delivery to user's home.
          Was used DOM API, HTML, CSS, Javascript, Json.
          The project was created at an early stage of learning."
          cardLink="https://mrmishka02.github.io/book-shop/pages/catalog.html"
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
          cardLink="https://mrmishka02.github.io/Online-Zoo/pages/petstory/#"
        />
      </div>
    </div>
  );
}

export default projects;
