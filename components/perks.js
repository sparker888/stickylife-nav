import * as React from "react"

const perks = [
  {
    name: "No Minimum Quantity",
    imageUrl:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648565448/NoMinimums_1_vrlwij.webp",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Lot Changes Variable Data",
    imageUrl:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648565703/LotChanges_1_c2raql.webp",
    description:
      "Need each item to say something slightly different? We can merge a data file with your design and customize names, numbers, and other text data.",
  },
  {
    name: "Order Any Size",
    imageUrl:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648565760/AnySize_kjfssx.webp",
    description:
      "You’re not stuck with predetermined sizes. If you can design it, we can print it. Get creative!",
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

const Perks = () => {
  return (
    <div className="bg-white border-t border-gray-200">
      <h2 id="perks-heading" className="sr-only">
        Our perks
      </h2>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {perks.map(perk => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 h-24 w-auto mx-auto"
                    src={perk.imageUrl}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-red-800">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-cyan-900">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Perks
