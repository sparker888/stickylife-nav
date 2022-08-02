import * as React from "react"

import { Fragment, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import {
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
} from "@heroicons/react/outline"
import Secondary from "../components/secondary"
import Image from "next/image"
import Link from "next/link"

const navigation = {
  categories: [
    {
      id: "products",
      name: "Products",
      featured: [
        {
          name: "Vinyl Decals",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Reflective Stickers",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Static Clings",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Pin Backed Buttons",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Banners",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Vinyl Decals",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Reflective Stickers",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Static Clings",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Pin Backed Buttons",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Banners",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Stickers",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Apparel",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Dog Tags",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "License Plates",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Signs",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Car Magnets",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Temporary Tattoos",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Key Chains",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "License Plate Frames",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
      ],
      sections: [
        {
          id: "section-1",
          name: "Section 1",
          items: [{ name: "", href: "" }],
        },
      ],
    },
    {
      id: "designs",
      name: "Design Ideas",
      featured: [
        {
          name: "Design Idea One",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
        {
          name: "Design Idea Two",
          href: "#",
          imageSrc:
            "https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg",
          imageAlt:
            "Tousled polaroid tilde praxis poutine godard synth blue bottle.",
        },
      ],
      sections: [
        {
          id: "section-1",
          name: "Section 1",
          items: [
            { name: "Design Ideas", href: "#" },
            { name: "Sports", href: "#" },
            { name: "Home Decor", href: "#" },
            { name: "Animals", href: "#" },
            { name: "Religion", href: "#" },
            { name: "Multicultural", href: "#" },
          ],
        },
        {
          id: "section-2",
          name: "Section 2",
          items: [
            { name: "Holidays", href: "#" },
            { name: "Public Service", href: "#" },
            { name: "Business", href: "#" },
            { name: "Special Events", href: "#" },
            { name: "Miscellaneous", href: "#" },
            { name: "Social Events", href: "#" },
          ],
        },
        {
          id: "section-3",
          name: "Section 3",
          items: [
            { name: "Trending", href: "#" },
            { name: "Clubs & Groups", href: "#" },
            { name: "Schools", href: "#" },
            { name: "Politics", href: "#" },
            { name: "Humor & Pop Culture", href: "#" },
            { name: "LGBT Community", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [{ name: "Learning Center", href: "/" }],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navigation7() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Tab Group */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    {/* Tab List - Products & Design Ideas */}
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map(category => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-cyan-500 border-cyan-500"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  {/* Tab Panels */}
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map(category => (
                      <Tab.Panel
                        key={category.name}
                        className="pt-10 pb-8 px-4 space-y-10"
                      >
                        {/* Featured Products */}
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map(item => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <Image
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                  layout="fill"
                                />
                              </div>
                              <Link href={item.href}>
                                <a className="mb-6 block font-medium text-gray-900">
                                  <span
                                    className="absolute z-10 inset-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                        {/* End Featured Products */}
                        {/* Category Headings */}
                        {category.sections.map(section => (
                          <div key={section.name}>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="flex flex-col space-y-6"
                            >
                              {/* Items in Categories */}
                              {section.items.map(item => (
                                <li key={item.name} className="flow-root">
                                  <Link href={item.href}>
                                    <a className=" text-gray-500">
                                      {item.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Pages */}
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map(page => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href}>
                        <a className="-m-2 p-2 block font-medium text-gray-900">
                          {page.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                {/* Login */}
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <Link href="#">
                      <a className="-m-2 p-2 block font-medium text-gray-900">
                        Log in
                      </a>
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="#">
                      <a className="-m-2 p-2 block font-medium text-gray-900">
                        New Account
                      </a>
                    </Link>
                  </div>
                </div>
                {/* Currency */}
                <div className="border-t border-gray-200 py-6 px-4">
                  <Link href="#">
                    <a className="-m-2 p-2 flex items-center">
                      <Image
                        src="https://tailwindui.com/img/flags/flag-united-states.svg"
                        alt=""
                        className="w-5 h-auto block flex-shrink-0"
                        width={20}
                        height={15}
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">
                        USA
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="bg-cyan-500 h-10 flex items-center justify-center text-sm font-medium text-blue-900 px-4 sm:px-6 lg:px-8">
          Promotional message goes here!
        </p>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo (lg+) */}
              <div className="hidden lg:flex-none lg:flex lg:items-center">
                <Link href="#">
                  <a>
                    <span className="sr-only">StickyLife</span>
                    <Image
                      className="h-12 w-auto"
                      src="https://res.cloudinary.com/gravital-digital/image/upload/v1648486325/logo_qojvzx.svg"
                      alt=""
                      width={140}
                      height={48}
                    />
                  </a>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map(category => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-cyan-500 text-cyan-500"
                                  : "border-transparent text-black hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 focus:outline-none text-base font-bold border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map(item => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <Image
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                              layout="fill"
                                            />
                                          </div>
                                          <Link href={item.href}>
                                            <a className="mt-6 block font-medium text-gray-900">
                                              <span
                                                className="absolute z-10 inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map(section => (
                                        <div key={section.name}>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map(item => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Link href={item.href}>
                                                  <a className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map(page => (
                    <Link key={page.name} href={page.href}>
                      <a className="flex items-center text-base font-bold text-black hover:text-gray-800">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* Create Account */}
                  <Link href="#">
                    <a className="text-sm font-medium text-black hover:text-gray-800">
                      New Account
                    </a>
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  {/* Log In */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link href="#">
                      <a className="group -m-2 p-2 flex items-center">
                        <UserCircleIcon
                          className="flex-shrink-0 h-6 w-6 text-cyan-500 group-hover:text-blue-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-black group-hover:text-gray-800">
                          Log In
                        </span>
                        <span className="sr-only">Log In</span>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <Link href="#">
                    <a className="text-black hover:text-gray-800 flex items-center">
                      <Image
                        src="https://tailwindui.com/img/flags/flag-united-states.svg"
                        alt=""
                        className="w-5 h-auto block flex-shrink-0"
                        width={20}
                        height={15}
                      />
                      <span className="ml-3 block text-sm font-medium">
                        USA
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </Link>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="account-number"
                      id="account-number"
                      className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Search"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-cyan-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="#">
                    <a className="group -m-2 p-2 flex items-center">
                      <ShoppingCartIcon
                        className="flex-shrink-0 h-6 w-6 text-cyan-500 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-black group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Secondary />
    </div>
  )
}
