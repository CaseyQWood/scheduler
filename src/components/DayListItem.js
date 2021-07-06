import React from "react";
import 'components/DayListItem.scss'
import classnames from 'classnames'


export default function DayListItem(props) {

  const formatSpots = (spots) => {
    return spots === 0 ? 'no spots remaining'
    : spots === 1 ? '1 spot remaining'
    : `${spots} spots remaining`

  }

  const listClass = classnames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })

  return (
    <li key={props.id} onClick={() => props.setDay(props.name)} className={listClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}