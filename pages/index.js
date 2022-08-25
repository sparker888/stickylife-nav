import * as React from "react"
import Navigation from "../components/navigation"
import Secondary from "../components/secondary"
import Image from "next/image"
import Link from "next/link"
import Hero from "../components/hero-top.js"
import Hero1 from "../components/hero-1"
import Promo from "../components/home-promo"
import Trending from "../components/trending-products"
import Perks from "../components/perks"
import About from "../components/aboutus"
import Footer from "../components/footer"

export default function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <Hero1 />
      <Promo />
      <Trending />
      <Perks />
      <About />
      <Footer />
    </>
  )
}
