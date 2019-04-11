import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import globalize from 'globalize'

const localizer = BigCalendar.globalizeLocalizer(globalize)

export default function Cal2(){
const MyCalendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      
      startAccessor="start"
      endAccessor="end"
    />
  </div>)
  return({MyCalendar});
}

/*events={myEventsList} prop in BigCalendar*/