import React, { useState, useEffect } from 'react'
import { CarouselHome } from '../componentes/CarouselHome'
import { Home } from '../componentes/Home'
import { NuestroEquipo } from '../componentes/NuestroEquipo'
import { QuienesSomos } from '../componentes/QuienesSomos'
import { API_SERVER } from '../API'

import '../styles/Home.css'

export const LandingPage = () => {
  const [dataHome, setDataHome] = useState({})

  useEffect(() => {
    const fetchContactanos = async () => {
      const response = await fetch(`${API_SERVER}inicio`)
      const data = await response.json()
      setDataHome(data)
    }
    fetchContactanos()
  }, [])

  const { carousel, titulo_seccion_carousel, integrantes, cei_descripcion } =
    dataHome
  return (
    <>
      <Home dataHome={dataHome} />
      <CarouselHome
        carousel={carousel}
        titulo_seccion_carousel={titulo_seccion_carousel}
      />
      <QuienesSomos cei_descripcion={cei_descripcion} />
      <NuestroEquipo integrantes={integrantes} />
    </>
  )
}
