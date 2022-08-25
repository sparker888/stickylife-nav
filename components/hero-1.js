/*
This is an Ecommerce > Component > Product Features  

This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    line0: "Custom Stickers",
    line1: "Produced Fast",
    line2: "and Colorful!",
    description:
      "I'm baby vaporware fanny pack freegan, raw denim yes plz listicle austin tumblr kitsch put a bird on it kale chips. Ramps shabby chic palo santo shoreditch, keffiyeh mixtape twee hashtag stumptown lo-fi.",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1661391545/AdobeStock_134347066_Preview_szr2ej.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    line0: "Get Stuck!",
    line1: "to Stickylife's",
    line2: "Design Tool!",
    description:
      "I'm baby vaporware fanny pack freegan, raw denim yes plz listicle austin tumblr kitsch put a bird on it kale chips. Ramps shabby chic palo santo shoreditch, keffiyeh mixtape twee hashtag stumptown lo-fi.",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1661390743/sticky-life-design-tool_vsb3va.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  {
    line0: "What Stickers",
    line1: "did You Earn",
    line2: "This Summer?",
    description:
      "I'm baby vaporware fanny pack freegan, raw denim yes plz listicle austin tumblr kitsch put a bird on it kale chips. Ramps shabby chic palo santo shoreditch, keffiyeh mixtape twee hashtag stumptown lo-fi.",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1661392328/AdobeStock_361226094_Preview_qfx6wk.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-4 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6"
                    : "lg:col-start-1 xl:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-7"
                )}
              >
                <h2 className="bg-gradient-to-br from-sky-400 via-sky-600 to-sky-400 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
                  <span className="mt-12 block leading-tight from-sky-400 via-pink-400 to-purple-600">
                    {feature.line0}
                  </span>
                  <span className="mt-0 block bg-gradient-to-br from-pink-400 via-pink-600 to-purple-400 bg-clip-text  leading-tight text-transparent">
                    {feature.line1}
                  </span>
                  <span className="mt--18 block bg-gradient-to-br from-purple-700 to-purple-900 bg-clip-text pb-4 leading-tight text-transparent">
                    {feature.line2}
                  </span>
                </h2>
                <p className="mt-2 lg:text-2xl text-black text-base">
                  {feature.description}
                </p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-pink-600"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1 xl:col-start-1"
                    : "lg:col-start-6",
                  "flex-auto lg:row-start-1 lg:col-span-6 xl:col-span-6"
                )}
              >
                <div className="aspect-w-5 aspect-h-5 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
