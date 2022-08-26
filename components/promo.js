import * as React from "react"
import Image from "next/image"
/* This example requires Tailwind CSS v2.0+ */
export default function Promo() {
  return (
    <div className="bg-white">
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-cyan-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Join us. Support
                  <br />
                  MS awareness month.
                </h2>
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-black">
                    Multiple Sclerosis awareness month magnets<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1648561482/heart-car-magnets-front_30_tsexeb.webp"
                        alt=""
                        width={288}
                      height={288}
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1648562681/zetong-li-_wSqAfafDu4-unsplash_sv5zju.jpg"
                        alt=""
                        width={288}
                        height={288}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1648563136/ms-awareness-woman_rirxte.jpg"
                        alt=""
                        width={288}
                        height={288}
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1648564167/istockphoto-1154520358-170667a_isro52.jpg"
                        alt=""
                        width={288}
                        height={288}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1648561482/heart-car-magnets-front_30_tsexeb.webp"
                        alt=""
                        width={288}
                        height={288}
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1648562681/zetong-li-_wSqAfafDu4-unsplash_sv5zju.jpg"
                        alt=""
                        width={288}
                      height={288}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
