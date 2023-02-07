/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#36454F] text-white h-screen'>
      <Head>
        <title>Thomy's Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id="hero">
  
      <Hero/>
      </section>

      {/* About  */}

      {/* Experiment */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

     
    </div>
  )
}
