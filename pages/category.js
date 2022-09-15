import * as React from "react"
import Navigation from "../components/navigation"
import Secondary from "../components/secondary"
import Image from "next/image"
import Link from "next/link"
import Process from "../components/process"
import Trending from "../components/trending-products"
import Footer from "../components/footer"

export default function Category() {
  return (
    <>
      <Navigation />
      <Process />
      <Trending />
      <Footer />
    </>
  )
}
