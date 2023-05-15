import React from 'react'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { parseISO } from 'date-fns';
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
       
        let formattedData = data.data.map(
          (evento) => {
            const initialDate = evento.attributes.fecha_inicio.split('-');
            const endDate = evento.attributes.fecha_fin.split('-');

            const initialHour = evento.attributes.hora_inicio.split(':')
            const finishHour = evento.attributes.hora_fin.split(':')
            return {
              title: evento.attributes.titulo,
              start: new Date(`${initialDate[0]}`,`${initialDate[1] - 1 }`, `${initialDate[2]}`,initialHour[0],initialHour[1]),
              end: new Date( `${endDate[0]}`,`${endDate[1] - 1 }`, `${endDate[2]}`, finishHour[0], finishHour[1] ),
              allDay: true
            }
          }
        )
        console.log(data)
        console.log(formattedData);
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
