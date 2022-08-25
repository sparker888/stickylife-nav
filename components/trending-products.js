const trendingProducts = [
  {
    id: 1,
    name: "Custom Vinyl Decals",
    color: "No minimum quantity limits.",
    price: "100+ decal shapes to choose from.",
    href: "../page-3/",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1661435560/summer-camp_wzhocb.jpg",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 2,
    name: "Custom Stickers",
    color: "Paper, Vinyl or Reflective",
    price: "Delivered kiss-cut on individual liners",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1661435942/scarf_kyhtlr.jpg",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 3,
    name: "Car Magnets",
    color: "Think it. You can stick it!",
    price: "40 shapes offered in almost any size",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648502461/car-magnets_egwfnl.webp",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 4,
    name: "Temporary Tattoos",
    color: "FDA approved for skin contact",
    price: "Check out our five shape categories!",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648502864/Temporary-Tattoo_r6okqs.jpg",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 5,
    name: "Reflective Stickers",
    color: "Tagline goes here.",
    price: "Secondary tagline goes here.",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648504680/website_prodecal_reflective_zusw9w.webp",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 6,
    name: "Apparel",
    color: "Tagline goes here.",
    price: "Secondary tagline goes here.",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648504781/custom-printed-facemasks_2_hfrsmr.jpg",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 7,
    name: "Static Clings",
    color: "Tagline goes here.",
    price: "Secondary tagline goes here.",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648504875/FaceCling_Mockup_72dpi_zblnxk.webp",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },
  {
    id: 8,
    name: "Dog Tags & Key Chains",
    color: "Tagline goes here.",
    price: "Secondary tagline goes here.",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/gravital-digital/image/upload/v1648504969/Custom-Dog-Tags_kelbgv.jpg",
    imageAlt: "Custom stickers delivered kiss-cut on individual liners.",
  },

  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function TrendingProducts() {
  return (
    <div className="bg-contain bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1648503475/color-background_m2vfv2.jpg')]">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl font-black tracking-tight text-black"
          >
            Trending StickyLife Products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-cyan-900 hover:text-orange-600 md:block"
          >
            See all our products!<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
          {trendingProducts.map(product => (
            <div key={product.id} className="group relative">
              <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 font-black text-black">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-red-800">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-cyan-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-cyan-900 hover:text-orange-600"
          >
            See all our products!<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
