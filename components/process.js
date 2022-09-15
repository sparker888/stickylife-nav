import * as React from "react"
import Image from "next/image"

const process = [
  {
    name: "1. Order Placement",
    description:
      "Our website has all the tools you need to design your custom vinyl decal including choice of color, shape, size, quantity and tape transfer.",
  },
  {
    name: "2. Pre-Production",
    description:
      "During this process we review your design settings. Image quality and prep your order by adding cutlines, bleeds and more to your print file..",
  },
  {
    name: "3. Production",
    description:
      "The production process is just about like one might imagine. We send your files through the appropriate printing process for your order. Most decals are combined with other orders for larger job runs.",
  },
  {
    name: "4. Post-Production",
    description:
      "After Production your order goes through a quality review process to determine if the outcome was as it should be. If your custom vinyl decals do not pass it will then need to go back into production.",
  },
  {
    name: "5. Packing and Shipping",
    description:
      "Normcore af wayfarers, pabst tbh tilde kitsch shaman hall of succulents letterpress chartreuse.",
  },
  {
    name: "6. Receipt of Package",
    description:
      "Once you receive your order, please check it carefully. If you're satisfied with the results we would appreciate your positive review.",
  },
]

const Process = () => {
  return (
    <>
      <div className="mx-auto py-16 px-4 sm:pt-24 sm:pb-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <div aria-hidden="true" className="relative">
          <Image
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1649359447/printing-presses_bkrl6l.jpg"
            className="w-full h-96 object-center object-cover"
            width={1024}
            height={683}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-6 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              StickyLife.com Order Progression
            </h2>
            <p className="mt-4 text-cyan-900">
              If you've come to make, create or design your own decals then
              you've come to the right place. Every custom order we receive goes
              through a quality-controlled production process. We're not
              satisfied with any order until you are!
            </p>
          </div>

          <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {process.map(step => (
              <div key={step.name} className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-black">
                  {step.name}
                  <span aria-hidden="true"> &rarr;</span>
                </dt>
                <dd className="mt-2 text-sm text-cyan-900">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default Process
