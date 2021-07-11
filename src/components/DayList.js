import React from 'react'
import DayListItem from 'components/DayListItem'

/*
Day list creation hook:

  Parent: Application.jsx
  Children: DayListItem.jsx
  
  Generates the JSX to display the list of days (Mon-Fri) along with the remaining spots.

  Props:
  - days:   [required]  <Array>     all the days that will be rendered in the component
  - day:    [required]  <String>    the name of the current  selected day 
  - setDay  [required]  <Function>  Set the state for selected day

  Use: 
  - <DayList
      days={<source>}
      day={<source>}
      setDay={<source>}
    />
*/

export default function DayList(props) {
  console.log('comments', props)

  const days = props.days.map((day, index) => {
    return (
      <DayListItem
        key={index}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    )
  })

  return days
}