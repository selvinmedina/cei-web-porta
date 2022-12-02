import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../styles/Home.css'

import { Arrow, HeroBanner } from '../utils/svgIcons'
import { SERVERURL } from '../API'

export const Home = ({ dataHome }) => {
  return (
    
    <div className='hero-section'>

      <div className='hero-section--inner'>
        
        <div className='hero-section-text'>
          <h1 className='hero-section-title'>{dataHome?.titulo}</h1>
          <p className='hero-section-subtitle'>{dataHome?.subtitulo}</p>
        </div>

        <div className='hero-section-links'>
          <Link to='/postulate'>
            <div className='hero-section-link'>Enviar Propuesta</div>
          </Link>

          <Link to='/blog'>
            <div className='hero-section-link--outline'>
              Ver Nuestro Blog
            </div>
         </Link>
        </div>
      </div>

    </div>

  )
}



    {/* // <div className='home'>
    //   <div className='home__banner'>
    //     <HeroBanner />
    //   </div>
    //   <div className='home__text'>
    //     <h1 className='home__title'>{dataHome?.titulo}</h1>

    //     <div className='home__btns'>
    //       <Link to='/postulate'>
    //         <div className='home__btn__propuesta'>Enviar Propuesta</div>
    //       </Link>
    //       <Link to='/blog'>
    //         <div className='home__btn__blog'>
    //           Ver Nuestro Blog <Arrow fill='#ffffff' width={24} height={23} />{' '}
    //         </div>
    //       </Link>
    //     </div>

    //     <motion.div
    //       whileInView={{ opacity: [0, 0, 0, 0.3, 0.5, 0.8, 1] }}
    //       className='home__subtitle'
    //     >
    //       {dataHome?.subtitulo}
    //     </motion.div>
    //   </div>
    //   <div className='home__img'>
    //     <img src={dataHome.imagen != null && dataHome.imagen.length > 0 ? SERVERURL + dataHome.imagen : ''} alt='Startup' />
    //   </div>
    // </div> */}
