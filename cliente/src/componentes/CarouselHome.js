import React, { useEffect, useState, useRef } from 'react'
import '../styles/CarouselHome.css'
import { Carousel } from '@mantine/carousel'
import { CarouselCard } from './CarouselCard'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import Autoplay from 'embla-carousel-autoplay'

import { motion } from 'framer-motion'

const data = [
  {
    titulo: 'static',
    descripcion:
      'Manos de Vida es una plataforma que permite a los usuarios registrarse y publicar sus actividades de manera rápida y sencilla.',
    imagen:
      'https://images.pexels.com/photos/11969709/pexels-photo-11969709.jpeg'
  },
  {
    titulo: 'static',
    descripcion:
      '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
    imagen: 'https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg'
  },
  {
    titulo: 'static',
    descripcion:
      '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
    imagen: 'https://images.pexels.com/photos/5611139/pexels-photo-5611139.jpeg'
  },
  {
    titulo: 'static',
    descripcion:
      '¿El gobierno y el sector económico, han comenzado a reconocer que el sector industrial está enfrentando muchos problemas. Por ello, se ha dado inicio a un proceso de desarrollo para reactivar la economía de la capital industrial.',
    imagen:
      'https://images.pexels.com/photos/12879613/pexels-photo-12879613.jpeg'
  }
]
export const CarouselHome = ({ titulo_seccion_carousel, carousel }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  const slides = carousel?.map((item, i) => (
    <Carousel.Slide key={i}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ))

  // const [width, setWidth] = useState(0);
  // const slider = useRef()

  // useEffect(() => {
  //   setWidth( slider.current.scrollWidth - slider.current.offsetWidth)
  // }, [])
  


  return (




    // <motion.div ref={slider} className='slider-container'>

    //   <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -width}}>
    //     {data.map( (image, i) => (
    //       <motion.div className='item' key={i}>
    //         <img src={image.imagen}></img>
    //       </motion.div>
    //     ))}
    //   </motion.div>

    // </motion.div>

    <div className='carousel-home'>
      <div className='section-title'>{titulo_seccion_carousel}</div>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize='48%'
        slideGap='xl'
        align='start'
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        dragFree
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
        
      >
        {slides}
      </Carousel>
    </div>


    // <div className='carousel-home'>
    //   <div className='section-titulo'>{titulo_seccion_carousel}</div>
    //     <Carousel slideSize="50%" height={200} align="start" slideGap="xs" controlsOffset="xs" controlSize={30} loop dragFree>
    //     {slides}
    //   </Carousel>
    // </div>
  )
}
