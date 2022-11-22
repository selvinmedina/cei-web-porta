import React, { useEffect, useState } from 'react'
import '../styles/PostulateAdmin.css'
import { Table } from '@mantine/core'
import { API_SERVER } from '../API'




export const PostulateAdmin = () => {
  const [dataPosts, setDataPosts] = useState([])

  useEffect(() => {
    const fetchContactanos = async () => {
      const response = await fetch(`${API_SERVER}postulacion`)
      const data = await response.json()

      let arrayElements= [];
      arrayElements = data[0].map(el=>{ return {...el,fechaCreado:el.fechaCreado.substring(0,10),genero:el.genero==1?"Masculino":(data.genero==2?"Femenino":"Otro"),}})
      setDataPosts(arrayElements)
    }
    fetchContactanos()
  }, []);
  const rows = dataPosts.map((element, index) => (
    <tr key={index}>
      <td>{<div className='td__content'>{element.descripcion}</div>}</td>
      <td>
        <div className='td__content'>{element.representante}</div>
      </td>
      <td>
        <div className='td__content'>{element.cuenta}</div>
      </td>
      <td>
        <div className='td__content'>{element.correo}</div>
      </td>
      <td>
        <div className='td__content'>{element.celular}</div>
      </td>
      <td>
        <div className='td__content'>{element.genero}</div>
      </td>
      <td>
        <div className='td__content'>{element.equipoTrabajo==1?"Si":"No"}</div>
      </td>
      <td>
      </td>
      <td>
        <div className='td__content'>{element.fechaCreado}</div>
      </td>
    </tr>
  ))

  const rows_responsive = dataPosts.map((element, index) =>    
   (
      <div className='table_content' key={index}>
        <div className='td__content'>{element.descripcion}</div>
        <div className='td__content'>{element.representante}</div>
        <div className='td__content'>{element.cuenta}</div>
        <div className='td__content'>{element.correo}</div>
        <div className='td__content'>{element.celular}</div>
        <div className='td__content'>{element.genero}</div>
        <div className='td__content'>{element.equipoTrabajo==1?"Si":"No"}</div>
        <div className='td__content'>{element.fechaCreado}</div>
      </div>
  ))


  return (
    <>
      <div className='casos'>
        <div className='casos-container flex'>
          <div className='casos-title section-title'>
            IDEAS <span style={{ color: '#e1575f' }}>POSTULADAS</span>
          </div>
          <div className='table__container'>
            <div className='table_noResponsive'>
              <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
                <thead>
                  <tr>
                    <th>
                      <div className='th__title'>Título</div>
                    </th>
                    <th>
                      <div className='th__title'>Nombre</div>
                    </th>
                    <th>
                      <div className='th__title'>Cuenta</div>
                    </th>
                    <th>
                      <div className='th__title'>Correo</div>
                    </th>
                    <th>
                      <div className='th__title'>Celular</div>
                    </th>
                    <th>
                      <div className='th__title'>Género</div>
                    </th>
                    <th>
                      <div className='th__title'>Equipo</div>
                    </th>
                    <th>
                    </th>
                    <th>
                      <div className='th__title'>Fecha</div>
                    </th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </div>
            <div className='table_responsive'>
                <div className='table_content titles_table'>
                    <div className='td__content'>TITULO</div>
                    <div className='td__content'>NOMBRE</div>
                    <div className='td__content'>Cuenta</div>
                    <div className='td__content'>CORREO</div>
                    <div className='td__content'>CELULAR</div>
                    <div className='td__content'>GENERO</div>
                    <div className='td__content'>EQUIPO</div>
                    <div className='td__content'>FECHA</div>
                </div>
                {rows_responsive}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
