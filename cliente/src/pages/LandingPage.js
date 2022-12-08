import React, { useState, useEffect } from 'react'
import { CarouselHome } from '../componentes/CarouselHome'
import { Home } from '../componentes/Home'
import { NuestroEquipo } from '../componentes/NuestroEquipo'
import { QuienesSomos } from '../componentes/QuienesSomos'
import { API_SERVER ,STRAPI_API,STRAPI_URL} from '../API'

import '../styles/Home.css'

export const LandingPage = () => {
  const [dataHome, setDataHome] = useState({})
  const [dataCarousel, setDataCarousel] = useState([])
  useEffect(() => {
    
    const fetchCarousel = async () =>{
      const response = await fetch(`${STRAPI_API}casos-exitos?populate=*`)
      const data = await response.json()
      console.log("karousel",data)
      setDataCarousel(data.data.map(d => {
        const imgUrl =  d.attributes.image.data.attributes.url.slice(1);
        const imagen = `${STRAPI_URL}${imgUrl}`
        return {
          id:d.id,
          titulo:d.attributes.tittle,
          descripcion:d.attributes.short_description,
          imagen
        }
      }))
    }
    const fetchContactanos = async () => {
      const response = await fetch(`${STRAPI_API}inicios`)
      const data = await response.json()
      console.log(data);
      setDataHome(data.data[0].attributes)
    }
    fetchCarousel();
    fetchContactanos()
  }, [])

  const { carousel, titulo_seccion_carousel, integrantes, cei_descripcion } = dataHome
  

  
  return (
    <>
      <Home dataHome={dataHome} />
      <CarouselHome
        carousel={dataCarousel}
        titulo_seccion_carousel={titulo_seccion_carousel}
      />
      <QuienesSomos cei_descripcion={cei_descripcion} />
      <NuestroEquipo integrantes={integrantes} />
    </>
  )
}
