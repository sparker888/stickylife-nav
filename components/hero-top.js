import * as React from "react"
import Image from "next/image"

/* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <Image
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1661371415/LicensePlates_Banner-REV_psmzg6.jpg"
          alt="tbd"
          className="object-center object-cover"
          width={1088}
          height={300}
        />
      </div>
    </div>
  )
}

export default Hero
