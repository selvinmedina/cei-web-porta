/* eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }] */
import '../styles/ContactanosAdmin.css'
import { Table } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import React, { useEffect, useState } from 'react'
import { IconCheck } from '@tabler/icons'
import { Carousel } from '@mantine/carousel';

export const ContactanosAdmin = () => {
  const [contactanos, setContactanos] = useState([])

  const deleteContactanos = async (id) => {
    try {
      await fetch(`https://cei1.herokuapp.com/1.0.0/Contactanos/${id}`, {
        method: 'DELETE'
      })
      setContactanos(contactanos.filter((contactanos) => contactanos.id !== id))
      showNotification({
        icon: <IconCheck />,
        title: 'Rechazado',
        color: 'green',
        message: 'Contacto eliminado correctamente!'
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    setContactanos(contactanos)
  }, [contactanos])

  useEffect(() => {
    const fetchContactanos = async () => {
      const response = await fetch(
        'https://cei1.herokuapp.com/1.0.0/Contactanos/'
      )
      const data = await response.json()
      setContactanos(data)
    }
    fetchContactanos()
  }, [])

  const rows = contactanos.map((element, index) => (
    <tr key={element.id}>
      <td>
        <div className='td__content'>{element.nombre}</div>
      </td>
      <td>
        <div className='td__content'>{element.email}</div>
      </td>
      <td>
        <div className='td__content'>+504 {element.telefono}</div>
      </td>
      <td>
        <div className='td__content'>{element.comentario}</div>
      </td>
      <td>
        <div className='tab__btns flex'>
          <div className='btn__editar'>Aceptar</div>
          <div
            className='btn__eliminar'
            onClick={(e) => deleteContactanos(element.id, e)}
          >
            Rechazar
          </div>
        </div>
      </td>
    </tr>
  ))

  const rowsCard_responsive = contactanos.map((element, index) => (
    <Carousel.Slide key={element.id}>
    <div  className='card_contactanos card_color'>
        <div>
          {element.nombre}
        </div>
        <div className='contactactos_card card_color'>
          {element.email}
          <span> +504 {element.telefono}</span>
        </div>
        <div className='contenido_card card_color'>
          {element.comentario}
        </div>
        <div >
           <div className='btn__editar'>Aceptar</div>
           <div
             className='btn__eliminar'
             onClick={(e) => deleteContactanos(element.id, e)}
           >Rechazar
          </div>
        </div>
    </div>
    </Carousel.Slide>

    // <tr key={element.id}>
    //   <td>
    //     <div className='td__content'>{element.nombre}</div>
    //   </td>
    //   <td>
    //     <div className='td__content'>{element.email}</div>
    //   </td>
    //   <td>
    //     <div className='td__content'>+504 {element.telefono}</div>
    //   </td>
    //   <td>
    //     <div className='td__content'>{element.comentario}</div>
    //   </td>
    //   <td>
    //     <div className='tab__btns flex'>
    //       <div className='btn__editar'>Aceptar</div>
    //       <div
    //         className='btn__eliminar'
    //         onClick={(e) => deleteContactanos(element.id, e)}
    //       >
    //         Rechazar
    //       </div>
    //     </div>
    //   </td>
    // </tr>
  ))


  return (
    <>
      <div
        className='contactanos-casos'
        style={{ paddingBottom: '2rem', minHeight: '100vh' }}
      >
        <div className='casos-container'>
          <div className='casos-title section-title'>
            PERSONAS QUE SE
            <span style={{ color: '#e1575f' }}> CONTACTARON</span>
          </div>
          <div className='contactanos__table__container'>
            <div className='table_contactanos'>
                <Table fontSize='md' highlightOnHover verticalSpacing='xl'>
                  <thead>
                    <tr>
                      <th>
                        <div className='th__title'>Nombre</div>
                      </th>

                      <th>
                        <div className='th__title'>Correo</div>
                      </th>
                      <th>
                        <div className='th__title'>Celular</div>
                      </th>
                      <th>
                        <div className='th__title'>Mensaje</div>
                      </th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
            </div>
            <div className='table_contactosResponsive'>
            <Carousel slideSize="85%" height={500} slideGap="md">
              
                {rowsCard_responsive}
              
            </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
