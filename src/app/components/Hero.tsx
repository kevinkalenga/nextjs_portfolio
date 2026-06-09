import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='py-5 container max-w-7xl mx-auto px-4'>
      <div className='max-w-3xl mx-auto text-center'>
          <div className='flex flex-col items-center mb-4'>
             <Image src="/photo_kevin.jpg" alt="profile name" width={100} height={100} 
             className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
          </div>
          <h1 className='text-4xl md:text-3xl font-semibold mb-6'>Bonjour, Je m'appelle <span className='text-primary'>Kevin Kalenga</span></h1>
          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Développeur full stack | Passionné d'UI/UX | Contributeur Open Source</p>
          <div className='flex justify-center space-x-4 mb-8'>
            <Link href="https://github.com/kevinkalenga" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors'>
               <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/kevin-olenga-kalenga-127452244/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors'>
               <FaLinkedin />
            </Link>
            <Link href="https://www.facebook.com/king.kevinkonvict" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors'>
               <FaFacebookF />
            </Link>
          </div>
          <div className='flex flex-col md:flex-row justify-center gap-4'>
            <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 
            rounded-lg hover:bg-primary/70 transition-colors'>
                Voir les projets
            </Link>
            <Link href="/contact" className='bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 
            rounded-lg hover:bg-gray-300 transition-colors hover:text-gray-800'>
                Contactez-Moi
            </Link>
          </div>
      </div>
    </section>
  )
}

export default Hero