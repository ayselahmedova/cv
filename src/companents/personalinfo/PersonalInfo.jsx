import React from 'react'
import personal from "./personal.module.css";

const PersonalInfo = () => {
  return (
    <div className={personal.header}>
        <h1 >Ad: Aysel</h1>
        <h2>Soyad: Ahmadova</h2>
        <p className={personal.p}>Yaş : 20</p>
        <p className={personal.p}>Yaşayış yeri: Sumgait</p>
    </div>
  )
}

export default PersonalInfo