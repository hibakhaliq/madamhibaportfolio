import NavBar from "./components/NavBar.js"
import Head from "next/head";
import Hero from "./components/Hero.js"
import Image from "next/image";
import Services from "./components/Services.js"
import PopularClass from "./components/PopularClass.js"
import Heros from "./components/Heros.js"
import Testimonials from "./components/Testimonials.js"
import Blogs from "./components/Blogs.js"
import Footer from "./components/Footer.js"

export default function Home() {
  return (
    <div >
      <Head>
        <title>asasEd -Circle Education Website</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <Services/>
      <PopularClass />
      <Heros />
      <Testimonials />
      <Blogs />
      <Footer />
      </div> )}
      