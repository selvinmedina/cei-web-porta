import React from 'react'
import '../styles/Contactanos.css'
import { TextInput, Textarea, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import {
  IconCheck,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconFaceIdError
} from '@tabler/icons'
import { STRAPI_API } from '../API'

export const Contactanos = () => {
  const form = useForm({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      comentario: ''
    },
    validate: {
      nombre: (value) =>
        value.length < 2 ? '*Nombre debe de contener mas de dos letras' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : '*email invalido'),
      telefono: (value) =>
        value.length < 8
          ? '*Numero de telefono debe de contener mas de 8 digitos'
          : null,
      comentario: (value) =>
        value.length < 10
          ? '*Comentario debe de contener mas de 10 letras'
          : null
    }
  })
  const createPost = async (values) => {
   
    const sentInfo = {
      data: values
    }

    try {
      const response = await fetch(
        `${STRAPI_API}Contactanoes/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sentInfo)
        }
      )
      const data = await response.json()
      if(data?.error) throw new Error('algo salio mal al tratar de enviar el formulario');
      
      showNotification({
        icon: <IconCheck />,
        title: 'Enviado',
        color: 'green',
        message:
          'Gracias por contactarnos ! Nos pondremos en contacto contigo lo antes posible.'
      })
      form.reset();
    } catch (error) {
      showNotification({
        icon: <IconFaceIdError />,
        title: 'Oops...',
        color: 'yellow',
        message:
          'Algo salio mal, revisa tus datos e intenta mas tarde.'
      });
    }
    
  }

  return (
    <div className='contactanos'>
      <div className='container_contactanos flex'>
        <div className='section-title titulo_contactanos'>
          PONTE EN <span style={{ color: '#e1575f' }}>CONTACTO📢</span>
        </div>
        <div className='contactanos-form emerge-down'>
          <form
            className='form-contactanos'
            onSubmit={form.onSubmit((values) => createPost(values))}
          >
            <div className='form-input'>
              <div className='form-seccion'>
                <TextInput
                  className='text'
                  required
                  label='Tú Nombre:'
                  placeholder='Ingresa tu nombre'
                  {...form.getInputProps('nombre')}
                />
                <TextInput
                  required
                  className='text'
                  label='Correo Electronico: '
                  placeholder='Ingrese su email'
                  {...form.getInputProps('email')}
                />
                <TextInput
                  className='text'
                  required
                  label='Tú Numero:'
                  placeholder='Ingrese su número de telefono'
                  {...form.getInputProps('telefono')}
                />
                <div
                  className='contact-icons'
                  style={{
                    marginTop: '1rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span>Encuentranos en:</span>
                  <span
                    style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      width: '40%',
                      justifyContent: 'space-around',
                      cursor: 'pointer'
                    }}
                  >
                    <IconBrandTelegram />
                    <IconBrandWhatsapp />
                    <IconBrandFacebook />
                  </span>
                </div>
              </div>
              <div className='form-seccion'>
                <Textarea
                  placeholder='Tus Comentarios Aqui'
                  label='Comentarios:'
                  className='contactanos-textarea'
                  minRows={7}
                  {...form.getInputProps('comentario')}
                />
                <div className='contactanos-btns'>
                  <Button
                    type='submit'
                    // mt='sm'
                    size='xl'
                    style={{
                      boxShadow: '3px 3px 17px #00000029',
                      backgroundColor: '#072958',
                      width:"50%"
                    }}
                  >
                    Enviar
                  </Button>
                  {/* <Button
                    type='reset'
                    mt='sm'
                    size='md'
                    style={{
                      boxShadow: '3px 3px 17px #00000029',
                      backgroundColor: '#e1575f'
                    }}
                  >
                    Cancelar
                  </Button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
