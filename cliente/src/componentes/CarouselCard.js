/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/carousel-card.css'
import { Paper, Text, Title, Button } from '@mantine/core';
import { SocialShared } from './SocialShared';
import { Link } from 'react-router-dom';


export const CarouselCard = (item) => {

  return (

    <Paper
      shadow="md"
      radius="md"
      sx={{ backgroundImage: `url(${item.imagen})` }}
      className="card"
    >
      <div className='card-inner'>
        <div className='card-inner--body'>

          <Title order={3} className="card-title">
            {item.titulo}
          </Title>

          <Text className="card-category" size="xs">
            {item.descripcion}
          </Text>



        </div>
        <div className='card-inner--footer'>
          <Link to={`/caso-de-exito/${item.id}`}>
            <Button variant="white" color="dark" className='card-button'>
              Leer Más
            </Button>
          </Link>
          {/* <SocialShared text={item.titulo} link={'http://localhost:3000/caso-exito/asdasd'}/> */}
        </div>
        <div className='shared-buttons'>
          <SocialShared text={item.titulo} link={'http://localhost:3000/caso-exito/asdasd'}/>
        </div>
      </div>
    </Paper>
  )
}
