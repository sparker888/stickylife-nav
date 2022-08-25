import * as React from "react"

const About = () => {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1648506291/jennifer-griffin-WmC0TNCItBY-unsplash_ypjhhd.jpg"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cyan-900 bg-opacity-70"
      />
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2
          id="cause-heading"
          className="text-3xl font-black tracking-tight text-white sm:text-4xl"
        >
          Supporting creativity and expression
        </h2>
        <p className="mt-3 text-xl text-white">
          We're committed to supporting creative, expressive and eccentric
          individuals. More than ever, we're seeing artwork from open-minded,
          tech-savvy, and socially conscious artists, and we want to support
          reflecting that self expression with products for your laptops, cars,
          windows and personal accessories. We hope that you will get to know us
          and give us the opportunity to be your canvas. Let's get creative!
        </p>
        <a
          href="#"
          className="mt-8 w-full block bg-cyan-500 border border-transparent rounded-md py-3 px-8 text-base font-bold text-black hover:bg-orange-600 sm:w-auto"
        >
          Read our story
        </a>
      </div>
    </div>
  )
}

export default About
