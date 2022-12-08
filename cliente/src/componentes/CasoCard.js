/* eslint-disable react/prop-types */
import React from 'react'
import { useModals } from '@mantine/modals'

import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme
} from '@mantine/core'
import { STRAPI_URL } from '../API'
import { Link } from 'react-router-dom'
import { SocialShared } from './SocialShared'

const useStyles = createStyles((theme) => ({
  card: {
    height: 500,
    width: 430,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    
  },

  title: {
    fontFamily: theme.fontFamily,
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.gray,
    opacity: 0.2,
    fontWeight: 700,
    fontSize: 20,
    textTransform: 'uppercase'
  }
}))

export const CasoCard = ({
  id,
  tipo,
  title,
  desc,
  image,
  subtitle,
  fechaCreado,
  seccionCasos
}) => {
  const { classes } = useStyles()
  const modals = useModals()
  const theme = useMantineTheme()

  const openCasosModal = () =>
    modals.openContextModal('casoModal', {
      overlayColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      centered: true,
      padding: 'xl',
      overflow: 'outside',

      size: 'calc(100% - 2rem)',
      innerProps: {
        type: tipo,
        title: title,
        description: desc,
        image: image,
        user: '',
        dateCreated: fechaCreado,
        section: seccionCasos
      }
    })

  return (

    <Paper
      shadow="md"
      radius="md"
      sx={{ backgroundImage: `url(${STRAPI_URL}${image})` }}
      className="card"
    >
       <div className='card-inner'>
        <div className='card-inner--body'>

          <Title order={3} className="card-title">
            {title}
          </Title>

          <Text className="card-category" size="xs">
            {desc}
          </Text>



        </div>
        <div className='card-inner--footer'>
          <Link to={`/caso-de-exito/${id}`}>
            <Button variant="white" color="dark" className='card-button'>
              Leer Más
            </Button>
          </Link>
          {/* <SocialShared text={item.titulo} link={'http://localhost:3000/caso-exito/asdasd'}/> */}
        </div>
        <div className='shared-buttons'>
          <SocialShared text={title} link={'http://localhost:3000/caso-exito/asdasd'}/>
        </div>
      </div>
    </Paper>
    // <Paper
    //   shadow='md'
    //   p='xl'
    //   radius='md'
    //   sx={{ backgroundImage: `url(${STRAPI_URL}${image})` }}
    //   className={classes.card}
    // >
    //   <div>
    //     <Text align='left' className={classes.category} size='xs'>
    //       {subtitle}
    //     </Text>
    //     <Title order={3} className={classes.title}>
    //       {title}
    //     </Title>
    //     <Text className={classes.category} size='xs'>
    //       {desc}
    //     </Text>
    //   </div>
    //   <Button variant='white' color='dark' onClick={openCasosModal}>
    //     Leer Caso
    //   </Button>
    // </Paper>
  )
}
