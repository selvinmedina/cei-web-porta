import React, { useEffect, useState } from 'react'
import { STRAPI_API, API_SERVER } from '../API'

import { CasoCarousel } from '../componentes/CasoCarousel'

import '../styles/Casos.css'


export const Casos = () => {

  const [casosTec, setCasosTec] = useState([])
  const [casosComercial, setcasosComercial] = useState([]);
  const [casosSocial, setcasosSocial] = useState([]);
  const [casosHealth, setCasosHealth] = useState([]);
  const [casosArtesanal, setCasosArtesanal] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchContactanos = async () => {
    const response = await fetch(
      `${API_SERVER}casos?seccionCasos=Social`
    )
    const data = await response.json()
    setCasosTec(data)
    console.log(data)
  }

  const fetchCasos = async () => {
    const response = await fetch(`${STRAPI_API}casos-exitos?populate[0]=image&populate[1]=rubro`);
    const data = await response.json();
    data.data.forEach( caso => {
      
      if( caso.attributes.rubro.data.attributes.titulo === 'Comercial' ){
        console.log('entro comercial')
        setcasosComercial([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'comercial',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosComercial]);
        console.log(casosComercial)
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Tecnologia' ){
        console.log('entro tec')
        setCasosTec([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Tecnologia',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosTec]);
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Health Care' ){
        console.log('entro care')
        setCasosHealth([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Health Care',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosHealth]);
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Social' ){
        console.log('entro social')
        setcasosSocial([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Social',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosSocial]);
        
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Artesanal' ){
        setCasosArtesanal([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Artesanal',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosArtesanal]);
      }

      setLoading(true)

    });
  }

  useEffect(() => { 
    // fetchContactanos()
    fetchCasos();
  }, [])

  return (
    <div className='emerge-down'>
      <div className='casos'>
        <div className='casos-container'>
          <div className='casos-title section-title'>
            CASOS QUE <span style={{ color: '#e1575f' }}>INSPIRAN🥇</span>
          </div>
            {
              loading && casosTec.length > 0 && <CasoCarousel data={casosTec} section={'Tecnología'} />
            }
            {
              loading && casosComercial.length > 0 && <CasoCarousel data={casosComercial} section={'Comercial'} />
            }
            {
              loading && casosSocial.length > 0 && <CasoCarousel data={casosSocial} section={'Social'} />
            }
            {
              loading && casosHealth.length > 0 && <CasoCarousel data={casosHealth} section={'Salud'} />
            }
            {
              loading && casosArtesanal.length > 0 && <CasoCarousel data={casosArtesanal} section={'Artesanal'} />
            }

            
        </div>
      </div>
    </div>
  )
}
