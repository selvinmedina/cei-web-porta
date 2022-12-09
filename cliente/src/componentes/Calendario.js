import React from 'react'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Eventos } from '../API'
const locales = {
  'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

export const Calendario = () => {
  const [eventos, setEventos] = React.useState([])
  React.useState(() => {
    Eventos.calendarEvents()
      .then((data) => {
        let formattedData = data.data.map((evento) => ({
          title: evento.attributes.titulo,
          start: new Date(evento.attributes.fecha_inicio),
          end: new Date(evento.attributes.fecha_fin),
          allDay: 200 > 480
        }))
        setEventos(formattedData)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      <div className='calendario-container flex'>
        <Calendar
          onSelectEvent={(event) => console.log(event)}
          localizer={localizer}
          events={eventos}
          startAccessor='start'
          endAccessor='end'
          style={{ height: '600px', margin: '50px', width: '100%' }}
        />
      </div>
    </div>
  )
}
