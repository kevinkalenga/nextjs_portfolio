'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/app/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        À propos de Moi
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Développeur Full Stack, je conçois des applications web modernes et performantes, 
          du front-end au back-end. Je m’attache à produire un code propre, maintenable et à
           créer des interfaces centrées sur l’expérience utilisateur.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Compétences
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Angular</li>
              <li>Redux Toolkit</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Sass</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>Php</li>
              <li>Laravel</li>
              <li>Symfony</li>
              <li>Spring boot</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Outils & autres</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
              <li>Agile / Scrum</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
         <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Expérience
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Développeur Full Stack (Auto-formation)
            </h3>
            <p className="text-primary mb-2">
              2023 - 2026 • Parcours autodidacte
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Apprentissage intensif du développement web (frontend & backend)</li>
              <li>Réalisation de projets personnels full stack (React, Node.js, PHP)</li>
              <li>Conception d’API REST et intégration de bases de données MySQL / MongoDB</li>
              <li>Pratique des bonnes pratiques de code et architecture propre</li>
              <li>Développement de compétences en frameworks modernes (Laravel, Symfony, Angular)</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Projets de formation et développement applicatif
            </h3>
            <p className="text-primary mb-2">
              2024 - 2025 • Projets pratiques
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Développement d’applications web full stack (React / Node / Laravel)</li>
              <li>Mise en place d’authentification et gestion des utilisateurs</li>
              <li>Création d’interfaces responsives et modernes avec Tailwind CSS</li>
              <li>Utilisation de Git/GitHub pour versioning et collaboration</li>
            </ul>
          </motion.div>

        </motion.div>
      </motion.section>
      {/* Education Section */}
      
        <motion.section
  {...fadeIn}
  transition={{ delay: 0.6 }}
>
  <motion.h2 
    className="section-title"
    {...fadeInUp}
  >
    Formation
  </motion.h2>

  <motion.div 
    className="max-w-3xl mx-auto"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >

    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHoverSmall}
    >
      <h3 className="text-xl font-semibold mb-2">
        Titre RNCP Niveau 5 – Développeur Web & Web Mobile
      </h3>

      <p className="text-primary mb-2">
        Studi • 2026 - 2027
      </p>

      <p className="text-secondary">
        Formation professionnalisante axée sur le développement d’applications web complètes,
        couvrant le frontend, le backend et les bases de données, avec mise en pratique sur projets réels.
      </p>
    </motion.div>

  </motion.div>
</motion.section>
    
     
    </div>
  )
} 