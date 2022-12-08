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
      setDataCarousel(data.data.map(d=> {
        return {
          id:d.attributes.id,
          titulo:d.attributes.tittle,
          descripcion:d.attributes.short_description,
          imagen: STRAPI_URL.substring(0,STRAPI_URL-1)+ d.attributes.image.data.attributes.url
        }
      }))
    }
    const fetchContactanos = async () => {
      const response = await fetch(`${API_SERVER}inicio`)
      const data = await response.json()
      setDataHome(data)
    }
    fetchCarousel();
    fetchContactanos()
  }, [])

  const { carousel, titulo_seccion_carousel, integrantes, cei_descripcion } =
    dataHome
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
