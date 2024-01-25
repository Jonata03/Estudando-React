import React from 'react'
import style from './Car.module.css'
const Car = ({cor,placa,km}) => {
  return (
    <div>
        <h2>=============================</h2>
        <p className={style.car_color}>cor: {cor}</p>
        <p>placa: {placa}</p>
        <p>km: {km}</p>
    </div>
  )
}

export default Car